import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './user/store/user.reducer';

import { UserListComponent } from './user/user-list/user-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostListComponent } from './user/post-list/post-list.component';
import { TodoListComponent } from './user/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NotFoundComponent,
    PostListComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    StoreModule.forRoot(userReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
