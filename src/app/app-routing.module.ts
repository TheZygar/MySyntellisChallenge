import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostListComponent } from './user/post-list/post-list.component';
import { TodoListComponent } from './user/todo-list/todo-list.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'todos/:userId', component: TodoListComponent },
  { path: 'posts/:userId', component: PostListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
