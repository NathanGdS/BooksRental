import { CreateGenreUseCase } from "../../src/modules/books/useCases/createGenre/CreateGenreUseCase";
import { ListGenreUseCase } from "../../src/modules/books/useCases/listGenres/ListGenreUseCase";
import { GenreRepositoryInMemory } from "../../src/modules/books/repositories/in-memory/GenreRepositoryInMemory";

let genreRepositoryInMemory: GenreRepositoryInMemory;
let createGenreUseCase: CreateGenreUseCase;
let listGenreUseCase: ListGenreUseCase;

describe("List all Genres", () => {
    beforeEach(() => {
        genreRepositoryInMemory = new GenreRepositoryInMemory();
        createGenreUseCase= new CreateGenreUseCase(genreRepositoryInMemory);
        listGenreUseCase = new ListGenreUseCase(genreRepositoryInMemory);
    });

    it('Sould be able to list all genres', async () => {
        const genre = await createGenreUseCase.execute({
            description: "Sci-Fi"
        });

        const genres = await listGenreUseCase.execute();
        
        expect(genres).toEqual([genre]);
    });
})