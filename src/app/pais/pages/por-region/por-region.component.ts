import { Country } from './../../interfaces/interfaces';
import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';

  paises:Country[] = [];

  constructor(private paisService: PaisService) {

  }

  activarRegion(region: string) {

    this.regionActiva = region;

    this.paisService.obtenerRegion(region).subscribe( response => {
      this.paises = response;

      console.log(this.paises);


    });


    //TODO: hacer un llamado al servicio para llamar a la region
  }
}
