import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../models/commande';
@Injectable({
  providedIn: 'root'
})
export class CommandesService {

  constructor(private http: HttpClient){
    
  }

  findAllCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${environment.apiUrl}/commandes`);
  }

  createCommande(commande:Commande): Observable<Commande> {
    return this.http.post<Commande>(`${environment.apiUrl}/commandes`, commande);
  }

}
