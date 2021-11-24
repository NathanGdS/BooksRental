import { AuthorsRepository } from "@modules/books/infra/typeorm/repositories/AuthorsRepository";
import { GenresRepository } from "@modules/books/infra/typeorm/repositories/GenresRepository";
import { IAuthorRepository } from "@modules/books/repositories/IAuthorRepository";
import { IGenreRepository } from "@modules/books/repositories/IGenreRepository";
import { container } from "tsyringe";

container.registerSingleton<IGenreRepository>(
    "GenresRepository",
    GenresRepository
);

container.registerSingleton<IAuthorRepository>(
    "AuthorsRepository",
    AuthorsRepository
);