import { Author } from "@modules/books/infra/typeorm/entities/Author";
import { IAuthorRepository } from "@modules/books/repositories/IAuthorRepository";
import { inject, injectable } from "tsyringe";


@injectable()
class ListAuthorUseCase{
    constructor(
        @inject("AuthorsRepository")
        private authorRepository: IAuthorRepository
    ) { }

    async execute():Promise<Author[]>{
        return this.authorRepository.findAll();
    }

}

export { ListAuthorUseCase };
