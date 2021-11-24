import { Router } from "express";

import { CreateGenreController } from "@modules/books/useCases/createGenre/CreateGenreController";
import { ListGenresController } from "@modules/books/useCases/listGenres/ListGenresController";

const genreRoutes = Router();

const createGenreController = new CreateGenreController();
const listGenresController = new ListGenresController();

genreRoutes.get("/", listGenresController.handle);
genreRoutes.post("/", createGenreController.handle);


export { genreRoutes };
