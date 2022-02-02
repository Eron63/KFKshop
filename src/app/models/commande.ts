import { Article } from "./article";
import { Utilisateur } from "./utilisateur";

export class Commande {
    id: number;
    articles: Article[];

    constructor(id: number, articles: Article[]){
        this.id = id;
        this.articles = articles;
    }   
    
}