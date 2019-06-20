import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import {ShowUserComponent} from './show-user/show-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'user/:userId',
    component: ShowUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
