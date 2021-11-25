import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListBookUseCase } from "./ListBookUseCase";

class ListBookController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            
            const listBooksUseCase = container.resolve(
                ListBookUseCase
            );

            const books = await listBooksUseCase.execute();

            return response.status(200).json({books});

        } catch (e) {
            return response.status(400).json({ error: e.message });
        }
    }
}

export { ListBookController };
