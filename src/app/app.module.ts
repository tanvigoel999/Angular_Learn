import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularMaterialModule } from './angular-material/angular-material.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { SingleBlogComponent } from './blogs/single-blog/single-blog.component';
import { BlogPageComponent } from './blogs/blog-page/blog-page.component';
import { PostComponent } from './blogs/post/post.component';
import { AdminblogComponent } from './adminblog/adminblog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthLoginComponent,
    SingleBlogComponent,
    BlogPageComponent,
    PostComponent,
    AdminblogComponent,
    DeleteDialogComponent,
 
  ],
  imports: [
    // MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
