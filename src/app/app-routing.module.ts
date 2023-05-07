import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthLoginComponent} from './auth-login/auth-login.component'
import { BlogPageComponent } from './blogs/blog-page/blog-page.component';
import { PostComponent } from './blogs/post/post.component';
import { AdminblogComponent} from './adminblog/adminblog.component';

const routes: Routes = [
  {path:"auth-login",component:AuthLoginComponent},
  {path:"blog",component:BlogPageComponent},
  {path:"blog/my-best-blog",component:PostComponent},
  {path:"admin/blog",component:AdminblogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
