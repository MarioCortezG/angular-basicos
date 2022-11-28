import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModuele } from './contador/contador.module';
import { HeroeModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroeModule,
    ContadorModuele
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
