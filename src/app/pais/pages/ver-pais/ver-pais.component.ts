import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) {

  }

  ngOnInit(): void {

    //forma 1, normal sin operadores rxjs
    // this.activatedRoute.params.subscribe( params  => {
    //   console.log(params['id']);

    //   this.paisService.obtenerPaisPorCodigo( params['id']).subscribe( response =>{
    //     console.log(response);
    //     this.pais = response
    //   });
    // });


    //forma 2 con operadores rxjs
    this.activatedRoute.params
      .pipe(
        //antes de suscribirse a la respuesta, el switchMap ejecutara el obtenerPais y devolvera el observable para poder suscribirnos, asi evitamos tener llamdas anidadas|
        switchMap((param) => this.paisService.obtenerPaisPorCodigo(param['id'])),
        //el tap, desecadenara un evento secundario que nosotros querramos despues de que se ejecute o se devuelva el observable de switchMap
        tap(resp => console.log(resp))
      )
      .subscribe(resp => this.pais = resp);
  }

}
