import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { MatButtonModule, MatCardModule, MatPaginatorModule } from '@angular/material';
import { ShowUserComponent } from './show-user/show-user.component';

@NgModule({
  declarations: [UserListComponent, ShowUserComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    CodeRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class CodeModule { }
