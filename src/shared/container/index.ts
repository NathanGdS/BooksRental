import { GenresRepository } from "@modules/books/infra/typeorm/repositories/GenresRepository";
import { IGenreRepository } from "@modules/books/repositories/IGenreRepository";
import { container } from "tsyringe";

container.registerSingleton<IGenreRepository>(
    "GenresRepository",
    GenresRepository
);