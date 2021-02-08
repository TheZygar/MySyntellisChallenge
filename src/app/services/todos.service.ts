import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  public getTodos(userId : number): Observable<any> {
    let url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
    return this.http
      .get(url)
      .pipe(catchError((response) => throwError(response.error.message)));
  }
}
