export class Post {

  title: string;
  content: string;
  loveIts: number;
  created_at: string; /* so it's saved as a string in firebase */
  
  constructor(title: string,content: string){
	this.title      = title;
	this.content    = content;
	this.loveIts    = 0;
	this.created_at = Date();
  }
  
  
}