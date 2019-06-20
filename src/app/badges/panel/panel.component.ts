import { Component, OnInit } from '@angular/core';
import {Badge} from '../../core/models/badge';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  badgeList = [
    {name: 'html', stars: 3},
    {name: 'css', stars: 5}
  ];

  constructor() { }

  ngOnInit() {
  }

}
