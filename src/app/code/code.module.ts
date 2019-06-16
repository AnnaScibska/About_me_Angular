import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeRoutingModule } from './code-routing.module';
import { HttpComponent } from './http/http.component';

@NgModule({
  declarations: [HttpComponent],
  imports: [
    CommonModule,
    CodeRoutingModule
  ]
})
export class CodeModule { }
