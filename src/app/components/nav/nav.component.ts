import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { HighlightSpanKind } from 'typescript';
import * as data from './../../../assets/json/menu.json';  

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, AfterViewInit  {
  @ViewChild('navbarToggler')
  navbarToggler!: ElementRef;

  // products: any = (data as any).default;
  // json:any = data;
  json:any = [];
  // isShown:boolean = false;
  // isShown = false;

  constructor() { }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
  }

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

  collapseNav() {

		if (this.navBarTogglerIsVisible()) {
			console.log('collapseNav: in NavigationComponent clicking navbarToggler');
			this.navbarToggler.nativeElement.click();
		} else {
			console.log('collapseNav: navBarTogglerIsVisible() returned false or is undefined.');
		}

	}

  private navBarTogglerIsVisible() {
		let isVisible = false;
		if (this.navbarToggler) {
			if (this.navbarToggler.nativeElement) {
				console.log('navbarToggler.nativeElement is defined');
				isVisible = this.navbarToggler.nativeElement.offsetParent !== null;
			} else {
				console.warn('navbarToggler.nativeElement was undefined or null.');
			}
		} else {
			console.warn('navbarToggler was undefined or null.');
		}

		return isVisible;
	}

}
