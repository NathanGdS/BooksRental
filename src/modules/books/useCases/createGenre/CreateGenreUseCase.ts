import { ICreateGenreDTO } from "../../dtos/ICreateGenreDTO";
import { Genre } from "../../infra/typeorm/entities/Genre";
import { IGenreRepository } from "../../repositories/IGenreRepository";
import { AppError } from "../../../../shared/errors/AppError";

class CreateGenreUseCase {
    constructor(
        private genreRepository: IGenreRepository
    ) { }

    async execute({description}: ICreateGenreDTO):Promise<Genre>{

        const genreExists = await this.genreRepository.findByDescription(description);

        if(genreExists) throw new AppError("Genre already exists!");

        const genre = await this.genreRepository.create({description});

        return genre;
    }
}

export { CreateGenreUseCase };
