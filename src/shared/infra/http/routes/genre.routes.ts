import { Router } from "express";

import { CreateGenreController } from "@modules/books/useCases/createGenre/CreateGenreController";

const genreRoutes = Router();

const createGenreController = new CreateGenreController();

genreRoutes.post("/", createGenreController.handle);

export { genreRoutes };
