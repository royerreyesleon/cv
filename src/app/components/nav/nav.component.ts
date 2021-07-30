import { Component, OnInit } from '@angular/core';
import * as data from './../../../assets/json/menu.json';  

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // products: any = (data as any).default;
  // json:any = data;
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
        this.json.push(cadena2[index]);
      }
      
    }

    // ORDEN.
    this.json.sort(function(a:any,b:any){return a.orden - b.orden;});
    // console.log(this.json);

  }

}
