import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGenreUseCase } from "./CreateGenreUseCase";

class CreateGenreController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{
            
            const { description } = request.body;

            const createGenreUseCase = container.resolve(
                CreateGenreUseCase
            );
            
            const genre = await createGenreUseCase.execute({description});

            return response.status(200).json(genre);

        }catch (e){
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateGenreController };
