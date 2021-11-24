import { Author } from "@modules/books/infra/typeorm/entities/Author";
import { Genre } from "@modules/books/infra/typeorm/entities/Genre";

interface ICreateBookDTO{
    genre_id?: string,
    title: string,
    description: string,
    date_release?: Date,
    authors?: Author[],
}

export { ICreateBookDTO };
