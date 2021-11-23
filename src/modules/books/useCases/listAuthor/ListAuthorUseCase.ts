import { Author } from "@modules/books/infra/typeorm/entities/Author";
import { IAuthorRepository } from "@modules/books/repositories/IAuthorRepository";



class ListAuthorUseCase{
    constructor(
        private authorRepository: IAuthorRepository
    ) { }

    async execute():Promise<Author[]>{
        return this.authorRepository.findAll();
    }

}

export { ListAuthorUseCase };
