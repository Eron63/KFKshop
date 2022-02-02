export class Article {
    id: number;
    nom: string;
    description: string;
    prix: number;

    constructor(id: number,
        nom: string,
        description: string,
        prix: number){
            this.id = id;
            this.nom = nom;
            this.prix = prix;
    }
}