import { Router } from "express";

import { CreateBookController } from "@modules/books/useCases/createBook/CreateBookController";
import { ListBookController } from "@modules/books/useCases/listBooks/ListBookController";


const bookRoutes = Router();

const createBookController = new CreateBookController();
const listBookController = new ListBookController();

bookRoutes.post("/", createBookController.handle);
bookRoutes.get("/", listBookController.handle);

export { bookRoutes };

