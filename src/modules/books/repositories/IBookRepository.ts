import { ICreateBookDTO } from "../dtos/ICreateBookDTO";
import { Book } from "../infra/typeorm/entities/Book";

interface IBookRepository {
    create(data: ICreateBookDTO): Promise<Book>;
    findByTitle(title: string): Promise<Book>;
    findBooks(): Promise<Book[]>;
}

export { IBookRepository };
