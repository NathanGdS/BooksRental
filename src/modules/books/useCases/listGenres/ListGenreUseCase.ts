import { IGenreRepository } from "../../repositories/IGenreRepository";
import { Genre } from "../../infra/typeorm/entities/Genre";
import { inject, injectable } from "tsyringe";

@injectable()
class ListGenreUseCase{

    constructor (
        @inject("GenresRepository")
        private genreRepository: IGenreRepository){}

    async execute(): Promise<Genre[]> {
        const genres = this.genreRepository.findGenres();
        return genres;
    }
}

export { ListGenreUseCase };
