import { ICreateAuthorDTO } from "@modules/books/dtos/ICreateAuthorDTO";
import { Author } from "@modules/books/infra/typeorm/entities/Author";
import { IAuthorRepository } from "@modules/books/repositories/IAuthorRepository";
import { AppError } from "@shared/errors/AppError";



class CreateAuthorUseCase {
    constructor(
        private authorRepository: IAuthorRepository
    ) {}

    async execute({
        age,
        name,
        nationality,
        alive,
    }:ICreateAuthorDTO):Promise<Author> {

        const authorExists = await this.authorRepository.findByName(name);

        if(authorExists) throw new AppError("The author's name already exists!");

        const author = await this.authorRepository.create({
            age,
            name,
            nationality,
            alive,
        });

        return author;
    }
}

export { CreateAuthorUseCase };
