import { ICreateAuthorDTO } from "@modules/books/dtos/ICreateAuthorDTO";
import { Author } from "@modules/books/infra/typeorm/entities/Author";
import { IAuthorRepository } from "@modules/books/repositories/IAuthorRepository";

class AuthorRepositoryInMemory implements IAuthorRepository{
    authors: Author[] = [];

    async create({
        name,
        nationality,
        age,
        alive,
    }: ICreateAuthorDTO): Promise<Author> {
        const author = new Author();

        if(!alive) alive = true;

        Object.assign(author, {
            name,
            nationality,
            age,
            alive,
        });

        this.authors.push(author);

        return author;
    }

    async findByName(name: string): Promise<Author> {
        return this.authors.find((author) => author.name === name)!;
    }

    async findAll(): Promise<Author[]> {
        return this.authors;
    }
}

export { AuthorRepositoryInMemory };
