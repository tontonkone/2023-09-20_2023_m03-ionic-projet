import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Presentateur } from '../models/presentateur';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentateurService {

  presentators: Presentateur[] = [];

  constructor(private _http: HttpClient) { }

  getAllPresentators(): Observable<Presentateur[]> {
    return this._http.get<Presentateur[]>(`${environment.baseUrl}speakers`)
  }

  //on  doit retourner un tableau de presentateurs
  // on connait l'id de la session
  // on doit verfier si dans speakers l'id 
  getPresentatorBySession(sessionId: number): Observable<Presentateur[]> {
    return this._http.get<Presentateur[]>(`${environment.baseUrl}speakers`)
    .pipe(
      map(data => {
        this.presentators = Object.values(data);
        const presentateurFilter = this.presentators.filter(p => p.id === sessionId)
        return presentateurFilter;
      })
    )
  }

  
}
