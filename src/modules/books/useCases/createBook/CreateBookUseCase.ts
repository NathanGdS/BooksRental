import { ICreateBookDTO } from "@modules/books/dtos/ICreateBookDTO";
import { Book } from "@modules/books/infra/typeorm/entities/Book";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IBookRepository } from "../../repositories/IBookRepository";

@injectable()
class CreateBookUseCase {
    constructor(
        @inject("BooksRepository")
        private bookRepository: IBookRepository){}


    async execute({
        title,
        date_release,
        authors,
        genre_id,
        description,
    }:ICreateBookDTO): Promise<Book|string>{
        
        const bookExists = await this.bookRepository.findByTitle(title);
        
        if(bookExists) throw new AppError("Book already exists!");
        
        const book = await this.bookRepository.create({
            title,
            date_release,
            authors,
            genre_id,
            description,
        });

        return book;
    }

}

export { CreateBookUseCase };
