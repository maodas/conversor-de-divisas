import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent implements OnInit {

  cantidadEnQuetzales!: number;
  cantidadEnDolares : number = 0;

  constructor() { }

  ngOnInit() {
  }

  convertir() {
    this.cantidadEnDolares = this.cantidadEnQuetzales / 8;
  }

}
