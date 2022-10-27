import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListadoEpisodioResponse } from '../interfaces/episodios.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  private url: string = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) { }

  buscarEpisodios(page: number): Observable<ListadoEpisodioResponse>{
    const endpoint = `${ this.url }?page=${page}`;
    console.log(endpoint)
    return this.http.get<ListadoEpisodioResponse>(endpoint);
  }
}
