import { ICreateGenreDTO } from "../dtos/ICreateGenreDTO";
import { Genre } from "../infra/typeorm/entities/Genre";

interface IGenreRepository{
    create(data: ICreateGenreDTO):Promise<Genre>;
    findGenres():Promise<Genre[]>;
    findByDescription(description: string):Promise<Genre>;
}

export { IGenreRepository };
