import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { CommandesService } from 'src/app/services/commandes.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticlesService) { 
  }

  initArticles() {
    this.articleService.findAllArticles().subscribe((data) => {
      this.articles = data;
    })
  }

  ngOnInit() {
    this.initArticles();
  }

}
