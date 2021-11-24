import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuidV4} from "uuid";
import { Book } from "./Book";

@Entity("genres")
class Genre {
    @PrimaryColumn()
    id?: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created_at?: Date;

    @OneToMany(() => Book, book => book.genre)
    books: Book[];

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Genre };
