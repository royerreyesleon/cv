import { Component, OnInit } from '@angular/core';
import * as data from './../../../assets/json/acercade.json';
import * as data2 from './../../../assets/json/redessociales.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  json:any = [];
  json2:any = [];

  constructor() { }

  ngOnInit(): void {
    // JSON CADENA.
    var cadena  = JSON.stringify(data);

    // FORMATO JSON.
    var cadena2 = JSON.parse(cadena);

    // RECORRER PARA LLENAR EL ARREGLO.
    for (let index = 0; index < cadena2.length; index++) {
      // if(cadena2[index].activo == 'SI'){
        this.json.push(cadena2[index]);
      // }
    }

    var cadena3  = JSON.stringify(data2);

    // FORMATO JSON.
    var cadena4 = JSON.parse(cadena3);

    // RECORRER PARA LLENAR EL ARREGLO.
    for (let index = 0; index < cadena4.length; index++) {
      if(cadena4[index].activo == 'SI'){
        this.json2.push(cadena4[index]);
      }
    }

    // ORDEN.
    // this.json.sort(function(a:any,b:any){return a.orden - b.orden;});
    // this.json.sort(function(a:any,b:any){return b.orden - a.orden;});

    // console.log(this.json2);
  }

}
