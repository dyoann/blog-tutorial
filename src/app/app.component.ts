import { Component } from '@angular/core';
import { Post } from './models/post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(){
	var config = {
	apiKey: "AIzaSyAx91ZvNwHesNWYAOLsbqxUiuk3W6K2oT0",
	authDomain: "http-client-demo-28cc1.firebaseapp.com",
	databaseURL: "https://http-client-demo-28cc1.firebaseio.com",
	projectId: "http-client-demo-28cc1",
	storageBucket: "http-client-demo-28cc1.appspot.com",
	messagingSenderId: "1091879406341"
	};
	firebase.initializeApp(config);
  }
  
}
