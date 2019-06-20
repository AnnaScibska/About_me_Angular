import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { AboutComponent } from './content/about/about.component';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroComponent
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'code',
    loadChildren: './code/code.module#CodeModule'
  },
  {
    path: 'badges',
    loadChildren: './badges/badges.module#BadgesModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
