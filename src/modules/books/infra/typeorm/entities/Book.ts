import { Column, CreateDateColumn, Entity, Generated, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4} from "uuid";
import { Author } from "./Author";
import { Genre } from "./Genre";

@Entity("books")
class Book{

    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;
    
    @Column({name: "release_date"})
    date_release?: Date;
    
    @ManyToOne(() => Genre)
    @JoinColumn({name: "genre_id"})
    genre: Genre;

    @Column()
    genre_id: string
    
    @ManyToMany(() => Author, { eager: true, cascade: true})
    @JoinTable({
        name:"authors_books",
        joinColumns: [{name: "book_id"}],
        inverseJoinColumns: [{name:"author_id"}],
    })
    authors: Author[];

    @CreateDateColumn()
    created_at?: Date;   

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Book };
