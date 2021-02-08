import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { TodosService } from 'src/app/services/todos.service';
import { ITodo } from 'src/app/models/todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})

export class TodoListComponent implements OnInit {
  userId$ : Observable<number> = of(0);
  todos$ : Observable<Array<ITodo>> = new Observable<Array<ITodo>>();
  constructor(private route: ActivatedRoute,
    private todoListService: TodosService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('userId') ?? '0');
    this.todos$ = this.todoListService.getTodos(id);
    this.userId$ = of(id);
  }
}
