import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private _httpClient: HttpClient) { }
  apiURL: string = `${environment.apiUrl}/Personas`
  getPersonas():Observable<Persona[]>{
    return this._httpClient.get<Persona[]>(`${this.apiURL}`);
  }
  getPersona(id:number):Observable<Persona>{
    return this._httpClient.get<Persona>(`${this.apiURL}/${id}`);
  }
  postPersona(persona:Persona):Observable<number>{
    return this._httpClient.post<number>(`${this.apiURL}`,persona);
  }
  putPersona(persona:Persona):Observable<number>{
    return this._httpClient.put<number>(`${this.apiURL}/${persona.id}`,persona);
  }
  deletePersona(id:number):Observable<number>{
    return this._httpClient.delete<number>(`${this.apiURL}/${id}`);
  }
}
