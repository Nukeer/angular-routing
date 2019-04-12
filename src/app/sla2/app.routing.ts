import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Teste2Component } from '../sla2/app.component';
import { Teste3Component } from '../sla3/app.component';

const ROUTES: Routes = [
  { path: '', component: Teste2Component, pathMatch: 'full' },
  {
    path: '3', component: Teste2Component, children: [
      { path: '', component: Teste3Component }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule]
})

export class TesteRouting {}
