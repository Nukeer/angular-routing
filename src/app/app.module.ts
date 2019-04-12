import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApplicationRoutes } from './app.routing';
import { Teste2Module } from './sla2/app.module';
import { TesteModule } from './sla1/app.module';
import { Teste3Module } from './sla3/app.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApplicationRoutes, 
    TesteModule,
    Teste2Module,
    Teste3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
