import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgesRoutingModule } from './badges-routing.module';
import { PanelComponent } from './panel/panel.component';
import { BadgeComponent } from './panel/badge/badge.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PanelComponent, BadgeComponent],
  imports: [
    CommonModule,
    BadgesRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class BadgesModule { }
