import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4} from "uuid";

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

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.created_at = new Date();
        }
        if(!this.alive){
            this.alive = true;
        }
    }
}

export { Author };
