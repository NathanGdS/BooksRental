import { Request, Response } from "express";


class CreateGenreController {
    async handle(request: Request, response: Response): Promise<Response> {
        try{
            /*
            const { description } = request.body;

            const createGenreUseCase
            */

            return response.status(200).json({ message: "irrraaaa"});

        }catch (e){
            return response.status(400).json({ error: e.message });
        }
    }
}

export { CreateGenreController };
