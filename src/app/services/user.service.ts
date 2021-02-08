import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import * as UserActions from 'src/app/user/user.actions';
import * as UserReducer from 'src/app/user/user.reducer';
import { Store, select } from '@ngrx/store'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http
      .get(url)
      .pipe(catchError((response) => throwError(response.error.message)));
  }

}
