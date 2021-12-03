import { AuthorRepositoryInMemory } from "@modules/books/repositories/in-memory/AuthorRepositoryInMemory";
import { CreateAuthorUseCase } from "@modules/books/useCases/createAuthor/CreateAuthorUseCase";
import { AppError } from "@shared/errors/AppError";


let authorRepositoryInMemory: AuthorRepositoryInMemory;
let createAuthorUseCase: CreateAuthorUseCase;

describe("Create an Author", () => {

    beforeEach(() => {
        authorRepositoryInMemory = new AuthorRepositoryInMemory();
        createAuthorUseCase = new CreateAuthorUseCase(authorRepositoryInMemory);
    });

    it("Should be able to create an new Author", async()=>{
        const authorAlive = await createAuthorUseCase.execute({
            name: "Alive Author",
            age: 99,
            nationality: "Alive"
        });
        expect(authorAlive).toHaveProperty("id");
        expect(authorAlive).toHaveProperty("alive");
        expect(authorAlive.alive).toBe(true);
    });

    it("Souldn't be able to create an Author with an existing name", async()=>{
        expect(async() => {
            await createAuthorUseCase.execute({
                name: "Frank Patrick Herbert",
                age: 65,
                nationality: "North America",
                alive: false,
            });
            await createAuthorUseCase.execute({
                name: "Frank Patrick Herbert",
                age: 65,
                nationality: "North America",
                alive: false,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

});