import { Router } from "express";

import { CreateAuthorController } from "@modules/books/useCases/createAuthor/CreateAuthorController";
import { ListAuthorController } from "@modules/books/useCases/listAuthor/ListAuthorController";


const authorRoutes = Router();

const createAuthorController = new CreateAuthorController();
const listAuthorController = new ListAuthorController();

authorRoutes.get("/", listAuthorController.handle);
authorRoutes.post("/", createAuthorController.handle);

export { authorRoutes };

