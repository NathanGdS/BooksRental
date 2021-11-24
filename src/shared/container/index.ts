import { AuthorsRepository } from "@modules/books/infra/typeorm/repositories/AuthorsRepository";
import { BooksRepository } from "@modules/books/infra/typeorm/repositories/BooksRepository";
import { GenresRepository } from "@modules/books/infra/typeorm/repositories/GenresRepository";
import { IAuthorRepository } from "@modules/books/repositories/IAuthorRepository";
import { IBookRepository } from "@modules/books/repositories/IBookRepository";
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

container.registerSingleton<IBookRepository>(
    "BooksRepository",
    BooksRepository
);