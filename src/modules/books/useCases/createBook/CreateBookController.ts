import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{
            
            const { title, authors,  date_release, genre_id, description} = request.body;

            const createBookUseCase = container.resolve(
                CreateBookUseCase
            );
            
            const book = await createBookUseCase.execute({
                title,
                authors,
                date_release,
                genre_id,
                description,
            });

            return response.status(200).json(book);

        }catch (e){
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateBookController };
