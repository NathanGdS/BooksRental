import { ICreateAuthorDTO } from "@modules/books/dtos/ICreateAuthorDTO";
import { Author } from "@modules/books/infra/typeorm/entities/Author";

interface IAuthorRepository{
    create(data: ICreateAuthorDTO):Promise<Author>;
    findByName(name: string):Promise<Author>;
    findAll():Promise<Author[]>;
}

export { IAuthorRepository };
