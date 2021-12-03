import { Column, CreateDateColumn, Entity, ManyToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4} from "uuid";
import { Book } from "./Book";

@Entity("authors")
class Author {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    nationality: string;
    
    @Column()
    age: number;
    
    @Column()
    alive?: boolean;
    
    @CreateDateColumn()
    created_at?: Date;

    @ManyToMany(() => Book, book => book.authors)
    books: Book[];

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Author };
