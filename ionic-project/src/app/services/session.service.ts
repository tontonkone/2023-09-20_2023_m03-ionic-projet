import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  sessions: Session[] = [];

  constructor(private _http: HttpClient) { }

  getAllSessions(): Observable<Session[]> {
    return this._http.get<Session[]>(`${environment.baseUrl}sessions`);
  }

  getSessionByPresentator(id: number): Observable<Session[]> {
    return this._http.get<Session[]>(`${environment.baseUrl}sessions`).pipe(
      map(data =>{
        console.log('Données brutes de l\'API :', data);
        this.sessions = Object.values(data);
        const sessionsFiltrees = this.sessions.filter(session => session.speakers);
        console.log("sesisons",sessionsFiltrees)

        return sessionsFiltrees.filter(session => session.speakers.includes(id));

      })
    )
  }

}
