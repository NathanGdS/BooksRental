import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAuthorUseCase } from "./CreateAuthorUseCase";

class CreateAuthorController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{
            
            const { age, nationality, name, alive } = request.body;

            const createAuthorUseCase = container.resolve(
                CreateAuthorUseCase
            );
            
            const author = await createAuthorUseCase.execute({
                age,
                nationality,
                name,
                alive,
            });

            return response.status(200).json(author);

        }catch (e){
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateAuthorController };
