import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public getPosts(userId : number): Observable<any> {
    let url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    return this.http
      .get(url)
      .pipe(catchError((response) => throwError(response.error.message)));
  }
}
