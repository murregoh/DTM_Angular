import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html'
})
export class NgSwitchComponent implements OnInit {

  alert: string;

  button: Array<any> = [
    {status: 'success', class: 'btn btn-success'},
    {status: 'info', class: 'btn btn-info'},
    {status: 'warning', class: 'btn btn-warning'},
    {status: 'danger', class: 'btn btn-danger'},
  ];

  constructor() { }

  ngOnInit() {
  }

  changeAlert( value: string) {
    this.alert = value;
  }

}
