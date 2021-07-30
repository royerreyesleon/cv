import { Component, OnInit } from '@angular/core';
import * as data from './../../../assets/json/habilidades.json';  

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  json:any = [];
  json2:any = [];

  constructor() { }

  ngOnInit(): void {
    // JSON CADENA.
    var cadena  = JSON.stringify(data);
    // console.log(cadena);


    // FORMATO JSON.
    var cadena2 = JSON.parse(cadena);
    // console.log(cadena2);
    // console.log(cadena2[0]);
    // this.json = cadena2
    
    const arr = Object.keys(cadena2[0]).map((key) => [key, cadena2[0][key]]);
    this.json = arr;

console.log(arr);

    // RECORRER PARA LLENAR EL ARREGLO.
    // for (let index = 0; index < cadena2.length; index++) {
      // if(cadena2[index].activo == 'SI'){
        // this.json.push(cadena2[index]);
      // }
    // }

    // console.log(this.json);
    // console.log(this.json[0]);
  }

}


