import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { Teste2Component } from './app.component';
import { TesteRouting } from './app.routing';


@NgModule({
  declarations: [
    Teste2Component
  ],
  imports: [
    TesteRouting
  ],
  providers: [],
  bootstrap: [Teste2Component]
})
export class Teste2Module { }
