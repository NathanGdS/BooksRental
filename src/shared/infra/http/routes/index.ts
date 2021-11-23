import { Router } from "express";
import { genreRoutes } from "./genre.routes";


const router = Router();

router.use("/genres", genreRoutes);

export { router };
