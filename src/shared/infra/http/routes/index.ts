import { Router } from "express";
import { authorRoutes } from "./author.routes";
import { genreRoutes } from "./genre.routes";


const router = Router();

router.use("/genres", genreRoutes);
router.use("/authors", authorRoutes);

export { router };
