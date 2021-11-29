import { ICreateAuthorDTO } from "@modules/books/dtos/ICreateAuthorDTO";
import { IAuthorRepository } from "@modules/books/repositories/IAuthorRepository";
import { getRepository, Repository } from "typeorm";
import { Author } from "../entities/Author";

class AuthorsRepository implements IAuthorRepository {
    private repository: Repository<Author>;

    public constructor() {
        this.repository = getRepository(Author);
    }
    
    async create({
        age,
        name,
        nationality,
        alive,
    }: ICreateAuthorDTO): Promise<Author> {
        const author = this.repository.create({
            age,
            name,
            nationality,
            alive,
        });

        await this.repository.save(author);

        return author;

    }
    async findByName(name: string): Promise<Author> {
        const author = this.repository.findOne({name});
        return author;
    }
    async findAll(): Promise<Author[]> {
        const authors = this.repository.find();
        return authors;
    }

}

export { AuthorsRepository };
