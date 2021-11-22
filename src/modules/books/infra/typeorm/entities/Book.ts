import { v4 as uuidV4} from "uuid";

class Book{
    id: string;
    title: string;
    author: string;
    date_release: Date;
    created_at: Date;   

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.created_at = new Date();
        }
    }
}

export { Book };
