import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListGenreUseCase } from "./ListGenreUseCase";

class ListGenresController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{
            const listGenreUseCase = container.resolve(
                ListGenreUseCase
            );
            
            const genres = await listGenreUseCase.execute();
            return response.status(200).json(genres);

        }catch (e){
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListGenresController };
