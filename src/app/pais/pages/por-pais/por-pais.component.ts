import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;

  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino:string) {
    this.hayError = false;
    this.termino=termino;

    const observable = this.paisService.buscarPais(this.termino).subscribe(paises => {
      this.paises = paises;

      console.log(paises);
    }, (error) => {
      console.log(error);

      this.hayError = true;
      this.paises = [];

    });

  }
}
