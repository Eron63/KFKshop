export class Utilisateur {
    id: number;
    email: string;
    nom: string;
    prenom: string;
    adresse: string;

    constructor(id: number,
        email: string,
        nom: string,
        prenom: string,
        adresse: string) {
            this.id = id;
            this.nom = nom;
            this.prenom = prenom;
            this.adresse = adresse;
    }
}