import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../../interfaces/personajes.interfaces';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  personaje: Personaje | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( ({ id }) => this.buscarPersonajePorId(id))
  }

  buscarPersonajePorId(id: string): void{
    this.personajesService.buscarPersonajePorId(id)
      .subscribe(response => {
        console.log(response)
        this.personaje = response
      }
      , error => { console.log(error) });
  }
}
