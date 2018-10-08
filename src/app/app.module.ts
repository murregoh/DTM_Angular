// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClassesComponent } from './components/classes/classes.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';

// Directives
import { HighlightDirective } from './directives/highlight.directive';

// Routes
import { APP_ROUNTING } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassesComponent,
    NgSwitchComponent,
    HomeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUNTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
