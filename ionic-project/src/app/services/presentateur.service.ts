import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Presentateur } from '../models/presentateur';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentateurService {

  constructor(private _http: HttpClient) { }

  getAllPresentators(): Observable<Presentateur[]> {
    return this._http.get<Presentateur[]>(`${environment.baseUrl}speakers`)
  }

  
}
