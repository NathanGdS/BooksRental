import { IBookRepository } from "../../repositories/IBookRepository";
import { Book } from "../../infra/typeorm/entities/Book";

class ListBookUseCase{

    constructor (private bookRepository: IBookRepository){}

    async execute(): Promise<Book[]> {
        const books = this.bookRepository.findBooks();
        return books;
    }
}

export { ListBookUseCase };
