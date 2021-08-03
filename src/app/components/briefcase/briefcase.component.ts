import { Component, OnInit } from '@angular/core';
import * as data from './../../../assets/json/portafolio.json';  


@Component({
  selector: 'app-briefcase',
  templateUrl: './briefcase.component.html',
  styleUrls: ['./briefcase.component.css']
})
export class BriefcaseComponent implements OnInit {

  json:any = [];

  constructor() { }

  ngOnInit(): void {
    // JSON CADENA.
    var cadena  = JSON.stringify(data);

    // FORMATO JSON.
    var cadena2 = JSON.parse(cadena);

    // RECORRER PARA LLENAR EL ARREGLO.
    for (let index = 0; index < cadena2.length; index++) {
      if(cadena2[index].activo == 'SI'){

        if(cadena2[index].herramientas != null){

          // console.log(cadena2[index].imagenes);

          // ORDENAR LAS IMAGENES.
          cadena2[index].imagenes.sort(function(a:any,b:any){
            // console.log(a.orden);
            // console.log(b);
            return a.orden - b.orden;
          });

          // ORDENADAS LAS IMAGENES
          // console.log(cadena2[index].imagenes);

          
          const arr = Object.keys(cadena2[index].herramientas).map((key) => [key, cadena2[index].herramientas[key]]);
          // console.log(arr);

          cadena2[index].herramientas = arr;
          
        }else{
          cadena2[index].herramientas = [];
        }
        // this.json = arr;

        this.json.push(cadena2[index]);
      }
    }

    

    // ORDEN.
    // this.json.sort(function(a:any,b:any){return a.orden - b.orden;});
    // this.json.sort(function(a:any,b:any){return b.orden - a.orden;});
    this.json.sort(function(a:any,b:any){
      // console.log(a);
      // console.log(b);
      return a.imagenes.orden - b.imagenes.orden;
    });


    // console.log(this.json);
  }

}
