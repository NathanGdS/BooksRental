import { ICreateBookDTO } from "@modules/books/dtos/ICreateBookDTO";
import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { IBookRepository } from "@modules/books/repositories/IBookRepository";
import { AppError } from "../../../../shared/error/AppError";

class CreateBookUseCase {
    constructor(private bookRepository: IBookRepository){}


    async execute({ author, title, date_release}:ICreateBookDTO): Promise<Book>{

        const bookExists = await this.bookRepository.findByTitle(title);

        if(bookExists) throw new AppError("Book already exists!");

        const book = await this.bookRepository.create({
            author,
            title,
            date_release,
        });

        return book;
    }

}

export { CreateBookUseCase };
