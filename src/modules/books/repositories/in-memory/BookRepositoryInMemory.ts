import { ICreateBookDTO } from "../../dtos/ICreateBookDTO";
import { Book } from "../../infra/typeorm/entities/Book";
import { IBookRepository } from "../IBookRepository";



class BookRepositoryInMemory implements IBookRepository{

    books: Book[] = [];

    async create({
        title,
        date_release,
        authors,
        genres,
    }: ICreateBookDTO): Promise<Book> {
        const book = new Book();

        Object.assign(book, {
            title,
            date_release,
            authors,
            genres,
        });

        this.books.push(book);
        return book;
    }

    async findByTitle(title: string): Promise<Book> {
        return this.books.find( (book)  => book.title === title)!;
    }

    async findBooks(): Promise<Book[]> {
        return this.books;
    }

}

export { BookRepositoryInMemory };
