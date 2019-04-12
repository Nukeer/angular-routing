import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Teste3Component } from './app.component';

const ROUTES: Routes = [
  {path: '', component: Teste3Component, pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule]
})

export class TesteRouting {}
