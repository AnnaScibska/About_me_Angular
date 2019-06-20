import {Component, Input, OnInit} from '@angular/core';
import {Badge} from '../../../core/models/badge';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input() badge: Badge;

  fullStars = [];
  emptyStars = [];

  ngOnInit() {
    this.badge.name = this.badge.name.toUpperCase();
    this.fullStars = Array.apply(null, {length: this.badge.stars}).map(Number.call, Number);
    this.emptyStars = Array.apply(null, {length: (Badge.starsMax - this.badge.stars)}).map(Number.call, Number);
  }

}
