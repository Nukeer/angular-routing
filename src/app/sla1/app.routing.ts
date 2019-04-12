import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TesteComponent } from './app.component';
import { Teste2Component } from '../sla2/app.component';

const ROUTES: Routes = [
  { path: '', component: TesteComponent, pathMatch: 'full' },
  {
    path: '3', component: TesteComponent, children: [
      { path: '', component: Teste2Component }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
  ],
  exports: [RouterModule]
})

export class TesteRouting { }
