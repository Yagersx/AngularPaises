import { Component } from '@angular/core';
import { Country } from '../../interfaces/interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;

  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino:string) {
    this.hayError = false;
    this.termino=termino;

    const observable = this.paisService.buscarCapital(this.termino).subscribe(paises => {
      this.paises = paises;

      console.log(paises);
    }, (error) => {
      console.log(error);

      this.hayError = true;
      this.paises = [];

    });
  }
}
