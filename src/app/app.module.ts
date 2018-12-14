import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PostListComponent} from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header.component';

import { PostService } from './services/post.service';

import {Routes, RouterModule} from '@angular/router';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = 
[
{ path : 'posts', component: PostComponent},
{ path : 'new', component: NewPostComponent},
{ path : '', redirectTo:  '/posts', pathMatch: 'full'},
{ path : '**', redirectTo: '/posts'}
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
    HeaderComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [
	PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
