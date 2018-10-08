import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <app-css></app-css>

    <app-classes></app-classes>

    <p [appHighlight]="'orange'">
        Hello World!
    </p>
    <p [appHighlight]="'green'">
        Hello World Again!
    </p>
    <p [appHighlight]="">
        Hello World Againnnn!
    </p>

    <app-ng-switch></app-ng-switch>
    `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}