import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
	  this.postsSubscription = this.postService.postsSubject.subscribe(
			(posts: Post[]) => {
				this.posts = posts;
			}
	  );
	  this.postService.emitPosts();
  }

  ngOnDestroy(){
	  this.postsSubscription.unsubscribe();
  }

}
