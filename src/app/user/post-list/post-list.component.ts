import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { IPost } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromReducer from '../store/user.reducer';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  selectedUser$: Observable<IUser> | undefined;
  userId$ : Observable<number> = of(0);
  posts$ : Observable<Array<IPost>> = new Observable<Array<IPost>>();  
  constructor(private route: ActivatedRoute,
    private postListService: PostsService,
    private store: Store<fromReducer.UserState>) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('userId') ?? '0'); 
    this.selectedUser$ = this.store.select('user');
    this.posts$ = this.postListService.getPosts(id);
    this.userId$ = of(id);
  }

}
