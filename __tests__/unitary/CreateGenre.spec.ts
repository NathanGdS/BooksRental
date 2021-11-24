import { GenreRepositoryInMemory } from "../../src/modules/books/repositories/in-memory/GenreRepositoryInMemory";
import { CreateGenreUseCase } from "../../src/modules/books/useCases/createGenre/CreateGenreUseCase";
import { AppError } from "../../src/shared/errors/AppError";

let genreRepositoryInMemory: GenreRepositoryInMemory;
let createGenreUseCase: CreateGenreUseCase;

describe("Create a Genre", () => {

    beforeEach(() => {
        genreRepositoryInMemory = new GenreRepositoryInMemory();
        createGenreUseCase = new CreateGenreUseCase(genreRepositoryInMemory);
    });

    it('Should be able to create a new Genre', async () => {
        const genre = await createGenreUseCase.execute({
            description: "Sci-Fi",
        });
        expect(genre).toHaveProperty("id");
    });

    it('Should not be able to acreate a Genre that the description already exists!', async() => {
        expect(async ()=>{
            await createGenreUseCase.execute({
                description: "Sci-Fi",
            });
            await createGenreUseCase.execute({
                description: "Sci-Fi",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});