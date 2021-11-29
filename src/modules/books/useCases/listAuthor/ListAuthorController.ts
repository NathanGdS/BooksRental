import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAuthorUseCase } from "./ListAuthorUseCase";



class ListAuthorController {

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            
            const listAuthorUseCase = container.resolve(
                ListAuthorUseCase
            );

            const authors = await listAuthorUseCase.execute();

            return response.status(200).json(authors);
            
        } catch (e) {
            return response.status(400).json({error: e.message});
        
        }
    }
}

export { ListAuthorController };
