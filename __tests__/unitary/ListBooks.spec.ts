import { CreateBookUseCase } from "../../src/modules/books/useCases/createBook/CreateBookUseCase";
import { ListBookUseCase } from "../../src/modules/books/useCases/listBooks/ListBookUseCase";
import { BookRepositoryInMemory } from "../../src/modules/books/repositories/in-memory/BookRepositoryInMemory";

let bookRepositoryInMemory: BookRepositoryInMemory;
let createBookUseCase: CreateBookUseCase;
let listBookUseCase: ListBookUseCase;

describe("List Books", () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory();
        createBookUseCase= new CreateBookUseCase(bookRepositoryInMemory);
        listBookUseCase = new ListBookUseCase(bookRepositoryInMemory);
    });

    it('Sould be able to list all books', async () => {
        const book = await createBookUseCase.execute({
            title:"Duna",
            author: "Frenskdsks",
            date_release: new Date(),
        });

        const books = await listBookUseCase.execute();
        
        expect(books).toEqual([book]);
    });
})