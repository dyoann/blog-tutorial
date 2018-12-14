import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import {PostService} from '../services/post.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {
	  this.initForm();
  }
  
  initForm(){
		this.postForm = this.formBuilder.group(
		{
			title :  ['',Validators.required],
			content: ['', Validators.required]
		});
  }
  
  onSavePost(){
	  const title    = this.postForm.get('title').value;
	  const content  = this.postForm.get('content').value;
	  const newPost  = new Post(title,content);
	  this.postService.addPost(newPost);
	  this.router.navigate(['/posts']);
  }

}