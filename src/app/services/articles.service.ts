import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient){
    
  }

  findAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${environment.apiUrl}/articles`);
  }

  findArticleById(id:number): Observable<Article> {
    return this.http.get<Article>(`${environment.apiUrl}/articles/{id}`);
  }
}
