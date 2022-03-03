import { Note } from "./note";
//change to interface and remove ?
export class User {
    id?:number;
    birthDate?: Date;
    name?:string;
    avatar?: string;
    bio?: string;
    notes: Note[] = [];
}
