import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user';
import { UsersService } from '../../core/services/users.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-http',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  pageNumber = 0;
  per_page: number;
  total: number;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getUsers(this.pageNumber).subscribe( (result: User[]) => {
      this.users = result['data'];
      this.per_page = result['per_page'];
      this.total = result['total'];
    });
  }

  updateUsersList(page: PageEvent) {
    this.userService.getUsers(page.pageIndex).subscribe( (result: User[]) => {
      this.users = result['data'];
      return this.users;
    });
  }
}

