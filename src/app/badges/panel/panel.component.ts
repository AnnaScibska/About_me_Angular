import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  badgeList = [
    {name: 'html', stars: 5},
    {name: 'css', stars: 4},
    {name: 'javascript', stars: 5},
    {name: 'angular', stars: 5},
    {name: 'c / c++', stars: 1},
    {name: 'c#', stars: 4},
    {name: 'php', stars: 3},
    {name: 'python', stars: 4}
  ];

  badgeName: string;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  onEmitName(name: string) {
    this.badgeName = name;
  }
}
