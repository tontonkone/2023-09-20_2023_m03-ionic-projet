import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Session } from '../models/session';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private _http: HttpClient) { }

  getAllSessions(): Observable<Session[]> {
    return this._http.get<Session[]>(`${environment.baseUrl}sessions`);
  }

  getSession(id: string ){
    
  }
}
