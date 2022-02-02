import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Commande } from '../models/commande';
import { CommandesService } from './commandes.service';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  articlesPanier: Article[] = [];
  commande : Commande;

  constructor(private commandeService:CommandesService) { }

  ajouterAuPanier(article:Article){
    this.articlesPanier.push(article);
  }

  validerPanier(){
    this.articlesPanier.forEach(element => {
      this.commande.articles.push(element)
    });    
    this.commandeService.createCommande(this.commande);
  }
}
