import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor( private _activeRoute: ActivatedRoute ) {
    this._activeRoute.params.subscribe( data => {
      console.log('Main Route');
      console.log( data );
    });
  }

  ngOnInit() {
  }

}
