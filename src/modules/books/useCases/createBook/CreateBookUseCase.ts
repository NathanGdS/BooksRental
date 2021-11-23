import { ICreateBookDTO } from "../../dtos/ICreateBookDTO";
import { Book } from "../../infra/typeorm/entities/Book";
import { IBookRepository } from "../../repositories/IBookRepository";
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
