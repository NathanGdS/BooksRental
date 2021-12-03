import { CreateBookUseCase } from "../../src/modules/books/useCases/createBook/CreateBookUseCase";
import { ListBookUseCase } from "../../src/modules/books/useCases/listBooks/ListBookUseCase";
import { BookRepositoryInMemory } from "../../src/modules/books/repositories/in-memory/BookRepositoryInMemory";
import { Author } from "@modules/books/infra/typeorm/entities/Author";

let bookRepositoryInMemory: BookRepositoryInMemory;
let createBookUseCase: CreateBookUseCase;
let listBookUseCase: ListBookUseCase;

let authors: Author[] = [
	{
        name:"Frank Patrick Flinstons",
        nationality: "SouthAmerica",
        age: 65,
        books: []
    },
	{
        name:"Frank Patrick Herbert",
        nationality: "North America",
        age: 65,
        alive: false,
        books: []
    },
];

describe("List Books", () => {
    beforeEach(() => {
        bookRepositoryInMemory = new BookRepositoryInMemory();
        createBookUseCase= new CreateBookUseCase(bookRepositoryInMemory);
        listBookUseCase = new ListBookUseCase(bookRepositoryInMemory);
    });

    it('Sould be able to list all books', async () => {
        const book = await createBookUseCase.execute({
            title:"Duna",
            authors,
            date_release: new Date(),
            description: "Crazy book on space",
        });

        const books = await listBookUseCase.execute();
        
        expect(books).toEqual([book]);
    });
})