import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgesRoutingModule } from './badges-routing.module';
import { PanelComponent } from './panel/panel.component';
import { BadgeComponent } from './panel/badge/badge.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [PanelComponent, BadgeComponent],
  imports: [
    CommonModule,
    BadgesRoutingModule,
    MatCardModule,
    MatIconModule,
    NgbModule
  ],
  exports: [PanelComponent],
  bootstrap: [PanelComponent]
})
export class BadgesModule { }
