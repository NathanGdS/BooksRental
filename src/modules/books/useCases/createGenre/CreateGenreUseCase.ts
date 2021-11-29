import { ICreateGenreDTO } from "../../dtos/ICreateGenreDTO";
import { Genre } from "../../infra/typeorm/entities/Genre";
import { IGenreRepository } from "../../repositories/IGenreRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateGenreUseCase {
    constructor(
        @inject("GenresRepository")
        private genreRepository: IGenreRepository
    ) { }

    async execute({description}: ICreateGenreDTO):Promise<Genre>{
        const genreExists = await this.genreRepository.findByDescription(description);
        
        if(genreExists) throw new AppError("Genre already exists!", 401);
        
        const genre = await this.genreRepository.create({description});

        return genre;
    }
}

export { CreateGenreUseCase };
