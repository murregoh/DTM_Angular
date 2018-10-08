import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <p [style.fontSize.px]="tamano">
      Hello World... This is a Label!
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
      <i class="fa fa-plus"></i>
    </button>

    &nbsp;

    <button class="btn btn-primary" (click)="tamano = tamano - 5">
      <i class="fa fa-minus"></i>
    </button>


  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano: number = 10;

  constructor() { }

  ngOnInit() {
  }

}
