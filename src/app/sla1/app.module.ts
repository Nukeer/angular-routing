import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { TesteComponent } from './app.component';
import { TesteRouting } from './app.routing';
import { Teste2Module } from '../sla2/app.module';


@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    TesteRouting,
    Teste2Module
  ],
  providers: [],
  bootstrap: [TesteComponent]
})
export class TesteModule { }
