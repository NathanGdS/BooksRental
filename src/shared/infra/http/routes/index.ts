import { Router } from "express";
import { authorRoutes } from "./author.routes";
import { bookRoutes } from "./book.routes";
import { genreRoutes } from "./genre.routes";


const router = Router();

router.use("/genres", genreRoutes);
router.use("/authors", authorRoutes);
router.use("/books", bookRoutes);

export { router };
