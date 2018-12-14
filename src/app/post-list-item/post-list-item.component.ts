import { Component, Input,  OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() currentPost: Post;
  @Input() currentIndex : number;
  
  constructor(private postService: PostService) { }

  ngOnInit() {
	  
  }
  
  like(){
	this.currentPost.loveIts++;
	this.postService.updatePost(this.currentIndex,this.currentPost);
  }
  
  unlike(){
	this.currentPost.loveIts--;
	this.postService.updatePost(this.currentIndex,this.currentPost);
  }
  
  removeCurrentPost(){
	  this.postService.removePost(this.currentPost);
  }
  
}
