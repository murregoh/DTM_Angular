import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor( private _activeRoute: ActivatedRoute ) {
    this._activeRoute.parent.params.subscribe( data => {
      console.log('Child Route');
      console.log( data );
    });
  }

  ngOnInit() {
  }

}
