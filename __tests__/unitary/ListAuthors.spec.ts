import { AuthorRepositoryInMemory } from "@modules/books/repositories/in-memory/AuthorRepositoryInMemory";
import { CreateAuthorUseCase } from "@modules/books/useCases/createAuthor/CreateAuthorUseCase";
import { ListAuthorUseCase } from "@modules/books/useCases/listAuthor/ListAuthorUseCase";

let authorRepositoryInMemory: AuthorRepositoryInMemory;
let createAuthorUseCase: CreateAuthorUseCase;
let listAuthorUseCase: ListAuthorUseCase;

describe("List all Authors", () => {

    beforeEach(() => {
        authorRepositoryInMemory = new AuthorRepositoryInMemory();
        createAuthorUseCase = new CreateAuthorUseCase(authorRepositoryInMemory);
        listAuthorUseCase = new ListAuthorUseCase(authorRepositoryInMemory);
    });

    it("Should be able to list all Authors", async () => {
        const author = await createAuthorUseCase.execute({
            name: "Frank Patrick Herbert",
            age: 65,
            nationality: "North America",
            alive: false,
        });

        const authors = await listAuthorUseCase.execute();

        expect(authors).toEqual([author]);

    });
});
