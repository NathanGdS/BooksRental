import { ICreateGenreDTO } from "@modules/books/dtos/ICreateGenreDTO";
import { IGenreRepository } from "@modules/books/repositories/IGenreRepository";
import { getRepository, Repository } from "typeorm";
import { Genre } from "../entities/Genre";

class GenresRepository implements IGenreRepository {

    private repository: Repository<Genre>;

    public constructor(){
        this.repository = getRepository(Genre);
    }

    async create({
        description
    }: ICreateGenreDTO): Promise<Genre> {
        const genre = this.repository.create({description});
        
        await this.repository.save(genre);

        return genre;
    }

    async findGenres(): Promise<Genre[]> {
        const genres = await this.repository.find();
        return genres;
    }

    async findByDescription(description: string): Promise<Genre> {
        const genre = await this.repository.findOne({description});
        return genre;
    }
}

export { GenresRepository };
