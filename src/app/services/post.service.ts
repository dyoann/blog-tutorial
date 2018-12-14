import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Post } from '../models/post.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() { 
	this.getPosts();
  }
  
  getPosts(){
	  firebase.database().ref("/posts").on('value',(data) => {
		this.posts = data.val() ? data.val() : [];
		this.emitPosts();
	  }
	  );
  }
  
  savePosts(){
	  firebase.database().ref("/posts").set(this.posts);
  }
  
  emitPosts(){
	  this.postsSubject.next(this.posts);
  }
  
  addPost(newPost : Post){
	  this.posts.push(newPost);
	  this.savePosts();
	  this.emitPosts();
  }
  
  updatePost(index: number, newPost: Post){
		this.posts[index] = newPost;
		this.savePosts();
		this.emitPosts();
  }
  
  removePost(post : Post){
	   const postIndexToRemove = this.posts.findIndex(
		(postEl) => {
			if(postEl === post){
				return true;
			}
		});
		this.posts.splice(postIndexToRemove,1);
		this.savePosts();
		this.emitPosts();
  }
  
  
}
