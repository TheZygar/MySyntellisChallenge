import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { IPost } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  userId$ : Observable<number> = of(0);
  posts$ : Observable<Array<IPost>> = new Observable<Array<IPost>>();  
  constructor(private route: ActivatedRoute,
    private postListService: PostsService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('userId') ?? '0');
    this.posts$ = this.postListService.getPosts(id);
    this.userId$ = of(id);
  }

}
