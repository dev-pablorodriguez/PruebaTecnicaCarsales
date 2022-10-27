import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoPersonajeResponse } from '../interfaces/personajes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private url: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) { }

  buscarPersonajes(page: number): Observable<ListadoPersonajeResponse>{
    const endpoint = `${ this.url }?page=${page}`;
    console.log(endpoint)
    return this.http.get<ListadoPersonajeResponse>(endpoint);
  }
}
