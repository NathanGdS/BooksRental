import { v4 as uuidV4} from "uuid";
import { Author } from "./Author";
import { Genre } from "./Genre";

class Book{
    id: string;
    title: string;
    date_release: Date;
    authors: Author[];
    genres: Genre[];
    created_at: Date;   

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Book };
