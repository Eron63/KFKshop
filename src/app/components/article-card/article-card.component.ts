import { Component, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/models/article';
import { Commande } from 'src/app/models/commande';
import { ArticlesService } from 'src/app/services/articles.service';
import { CommandesService } from 'src/app/services/commandes.service';
import { PanierService } from 'src/app/services/panier.service';
import { PanierComponent } from '../panier/panier.component';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnInit {

  @Input() article : Article;

  constructor(private panierService:PanierService) { }

  ngOnInit() {}

  
  ajouterArticle(){
    this.panierService.ajouterAuPanier(this.article);
  }


}
