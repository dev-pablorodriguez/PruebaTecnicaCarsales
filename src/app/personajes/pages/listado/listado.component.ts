import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  currentPage: number = 1;
  prevPage: number | null = null;
  nextPage: number | null = null;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.buscarPersonajes(this.currentPage)
  }

  buscarPersonajes(page: number): void{
    this.personajesService.buscarPersonajes(page)
      .subscribe(response => {
        console.log(response);

        this.currentPage = page;
        this.prevPage = this.getPageNumber(response.info.prev);
        this.nextPage = this.getPageNumber(response.info.next);
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
