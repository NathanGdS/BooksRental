import { v4 as uuidV4} from "uuid";


class Author {
    id?: string;
    name: string;
    nationality: string;
    age: number;
    alive?: boolean;
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
