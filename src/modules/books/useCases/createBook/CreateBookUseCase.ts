import { ICreateBookDTO } from "@modules/books/dtos/ICreateBookDTO";
import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { AppError } from "../../../../shared/errors/AppError";
import { IBookRepository } from "../../repositories/IBookRepository";

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
