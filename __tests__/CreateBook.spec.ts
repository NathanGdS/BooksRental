import { CreateBookUseCase } from "../src/modules/books/useCases/createBook/CreateBookUseCase";
import { BookRepositoryInMemory } from "../src/modules/books/repositories/in-memory/BookRepositoryInMemory";
import { AppError } from "../src/shared/error/AppError";

let bookRepositoryInMemory: BookRepositoryInMemory;
let createBookUseCase: CreateBookUseCase;

describe("Create a new Book", () => {

	beforeEach(() => {
		bookRepositoryInMemory = new BookRepositoryInMemory();
		createBookUseCase = new CreateBookUseCase(bookRepositoryInMemory);
	});

	it('Should be possible to create a new Book', async() => {
		const book = await createBookUseCase.execute({
			title:"Duna",
			author: "Frenskdsks",
			date_release: new Date(),
		});
		expect(book).toHaveProperty("id");
	});

	it('Should not be able to create a new Book if the title already exists', async() => {
		expect(async() => {
			await createBookUseCase.execute({
				title:"Duna",
				author: "Frenskdsks",
				date_release: new Date(),
			});
			await createBookUseCase.execute({
				title:"Duna",
				author: "Frenskdsks",
				date_release: new Date(),
			});
		}).rejects.toBeInstanceOf(AppError);
	})

});