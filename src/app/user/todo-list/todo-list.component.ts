import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/models/todo';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromReducer from '../store/user.reducer';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})

export class TodoListComponent implements OnInit {
  selectedUser$: Observable<IUser> | undefined;
  userId$ : Observable<number> = of(0);
  todos$ : Observable<Array<ITodo>> = new Observable<Array<ITodo>>();
  constructor(private route: ActivatedRoute,
    private todoListService: TodosService,
    private store: Store<fromReducer.UserState>) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('userId') ?? '0');
    this.selectedUser$ = this.store.select('user');
    this.todos$ = this.todoListService.getTodos(id);
    this.userId$ = of(id);
  }
}
