import { ICreateBookDTO } from "@modules/books/dtos/ICreateBookDTO";
import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { AppError } from "../../../../shared/errors/AppError";
import { IBookRepository } from "../../repositories/IBookRepository";

class CreateBookUseCase {
    constructor(private bookRepository: IBookRepository){}


    async execute({
        title,
        date_release,
        authors,
        genre_id,
    }:ICreateBookDTO): Promise<Book>{

        const bookExists = await this.bookRepository.findByTitle(title);

        if(bookExists) throw new AppError("Book already exists!");

        const book = await this.bookRepository.create({
            title,
            date_release,
            authors,
            genre_id,
        });

        return book;
    }

}

export { CreateBookUseCase };
