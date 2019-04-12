import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment.prod';

import { NgModule } from '@angular/core';


const ROUTES: Routes = [

  { path: '', redirectTo: 'teste', pathMatch: 'full' },
  {
    path: '1', children: [
      { path: '', loadChildren: './sla1/app.module#TesteModule' },
    ]
  },

  // {path: '**', redirectTo: 'teste', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule]
})

export class ApplicationRoutes {
  AplicationRoutes = RouterModule.forRoot(
    ROUTES, { enableTracing: !environment.production }
  );
}
