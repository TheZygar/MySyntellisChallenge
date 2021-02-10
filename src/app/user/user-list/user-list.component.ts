import { Component, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Store, props } from '@ngrx/store';
import * as fromReducer from '../store/user.reducer';
import * as UserActions from '../store/user.actions';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.sass']
})

export class UserListComponent implements OnInit {

  users$ : Observable<Array<IUser>> = new Observable<Array<IUser>>();
  constructor(private userListService: UserService,
              private router: Router,
              private store: Store<fromReducer.UserState>) { }

  ngOnInit(): void {
    this.users$ = this.userListService.getUsers();
  }

  viewPosts(user: IUser) {
    this.store.dispatch(UserActions.SetUser({ user }));
    this.router.navigate([`/posts/${user.id}`]);
  }
  
  viewTodos(user: IUser) {
    this.store.dispatch(UserActions.SetUser({ user }));
    this.router.navigate([`/todos/${user.id}`]);
  }
}
