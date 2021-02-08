import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})

export class UserListComponent implements OnInit {

  users$ : Observable<Array<IUser>> = new Observable<Array<IUser>>();
  constructor(private userListService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.users$ = this.userListService.getUsers();
  }

  viewPosts(user: IUser) {
    this.router.navigate([`/posts/${user.id}`]);
  }
  
  viewTodos(user: IUser) {
    this.router.navigate([`/todos/${user.id}`]);
  }
}
