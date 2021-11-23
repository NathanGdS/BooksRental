import { ICreateGenreDTO } from "../../dtos/ICreateGenreDTO";
import { Genre } from "../../infra/typeorm/entities/Genre";
import { IGenreRepository } from "../IGenreRepository";



class GenreRepositoryInMemory implements IGenreRepository{
    genres: Genre[] = [];

    async create({
        description
    }: ICreateGenreDTO): Promise<Genre> {
        const genre = new Genre();

        Object.assign(genre, { description });

        this.genres.push(genre);

        return genre;
    }

    async findGenres(): Promise<Genre[]> {
        return this.genres;
    }

    async findByDescription(description: string): Promise<Genre> {
       return this.genres.find((genre) => genre.description === description)!;
    }

}

export { GenreRepositoryInMemory };
