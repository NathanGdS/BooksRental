import { IBookRepository } from "../../repositories/IBookRepository";
import { Book } from "../../infra/typeorm/entities/Book";
import { inject, injectable } from "tsyringe";

@injectable()
class ListBookUseCase{

    constructor (
        @inject("BooksRepository")
        private bookRepository: IBookRepository){}

    async execute(): Promise<Book[]> {
        const books = this.bookRepository.findBooks();
        return books;
    }
}

export { ListBookUseCase };
