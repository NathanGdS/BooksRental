import { Router } from "express";

import { CreateAuthorController } from "@modules/books/useCases/createAuthor/CreateAuthorController";


const authorRoutes = Router();

const createAuthorController = new CreateAuthorController();

authorRoutes.post("/", createAuthorController.handle);

export { authorRoutes };

