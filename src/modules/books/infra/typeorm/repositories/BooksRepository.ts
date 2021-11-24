import { ICreateBookDTO } from "@modules/books/dtos/ICreateBookDTO";
import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { getRepository, Repository } from "typeorm";
import { Book } from "../entities/Book";

class BooksRepository implements IBookRepository {

    private repository: Repository<Book>;

    public constructor(){
        this.repository = getRepository(Book);
    }
    async create({
        title,
        authors,
        date_release,
        genre_id,
        description,
    }: ICreateBookDTO): Promise<Book> {
        const book = this.repository.create({
            authors,
            date_release,
            genre_id,
            title,
            description,
        });
        
        await this.repository.save(book);

        return book;
    }

    async findBooks(): Promise<Book[]> {
        const Books = await this.repository.find();
        return Books;
    }

    async findByTitle(title: string): Promise<Book> {
        const book = await this.repository.findOne({title});
        return book;
    }
}

export { BooksRepository };
