import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Teste3Component } from './app.component';
import { TesteRouting } from './app.routing';


@NgModule({
  declarations: [
    Teste3Component
  ],
  imports: [
    TesteRouting
  ],
  providers: [],
  bootstrap: [Teste3Component]
})
export class Teste3Module { }
