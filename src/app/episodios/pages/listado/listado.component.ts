import { Component, OnInit } from '@angular/core';
import { Episodio } from '../../interfaces/episodios.interfaces';
import { EpisodiosService } from '../../services/episodios.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  currentPage: number = 1;
  prevPage: number | null = null;
  nextPage: number | null = null;
  episodios: Episodio[] = [];

  constructor(private episodiosService: EpisodiosService) { }

  ngOnInit(): void {
    this.buscarPersonajes(this.currentPage)
  }

  buscarPersonajes(page: number): void{
    this.episodiosService.buscarEpisodios(page)
      .subscribe(response => {
        console.log(response);

        this.currentPage = page;
        this.prevPage = this.getPageNumber(response.info.prev);
        this.nextPage = this.getPageNumber(response.info.next);
        this.episodios = response.results;
      }
      , error => { console.log(error) });
  }

  //Obtiene el número de la página desde el query string retornado por la API
  getPageNumber(url: string): number | null{
    if(!url) return null;

    const pageIndex = url.search('=');
    const pageNumber = parseInt(url.slice(pageIndex + 1));
    return pageNumber;
  }

}

