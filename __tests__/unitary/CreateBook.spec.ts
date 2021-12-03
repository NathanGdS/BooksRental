import { CreateBookUseCase } from "@modules/books/useCases/createBook/CreateBookUseCase";
import { BookRepositoryInMemory } from "@modules/books/repositories/in-memory/BookRepositoryInMemory";
import { AppError } from "../../src/shared/errors/AppError";
import { Author } from "@modules/books/infra/typeorm/entities/Author";
import { Genre } from "@modules/books/infra/typeorm/entities/Genre";

let bookRepositoryInMemory: BookRepositoryInMemory;
let createBookUseCase: CreateBookUseCase;

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

describe("Create a new Book", () => {

	beforeEach(() => {
		bookRepositoryInMemory = new BookRepositoryInMemory();
		createBookUseCase = new CreateBookUseCase(bookRepositoryInMemory);
	});

	it('Should be possible to create a new Book', async() => {
		const book = await createBookUseCase.execute({
			title:"Duna",
			date_release: new Date(),
			authors,
			genre_id: "uuid",
			description: "Crazy book on space",
		});
		expect(book).toHaveProperty("id");
		expect(book).toHaveProperty("genre_id");
	});

	it('Should not be able to create a new Book if the title already exists', async() => {
		expect(async() => {
			await createBookUseCase.execute({
				title:"Duna",
				date_release: new Date(),
				description: "Crazy book on space",
			});
			await createBookUseCase.execute({
				title:"Duna",
				date_release: new Date(),
				description: "Crazy book on space",
			});
		}).rejects.toBeInstanceOf(AppError);
	})

});