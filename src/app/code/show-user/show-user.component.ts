import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user';
import { UsersService } from '../../core/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  user: User;
  userId: number;

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( params => {
      this.userId = Number(params.get('userId'));
    });
    this.userService.getUser(this.userId).subscribe( (result: User) => {
      this.user = result['data'];
    });
  }

}
