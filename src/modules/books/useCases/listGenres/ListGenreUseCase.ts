import { IGenreRepository } from "../../repositories/IGenreRepository";
import { Genre } from "../../infra/typeorm/entities/Genre";

class ListGenreUseCase{

    constructor (private genreRepository: IGenreRepository){}

    async execute(): Promise<Genre[]> {
        const books = this.genreRepository.findGenres();
        return books;
    }
}

export { ListGenreUseCase };
