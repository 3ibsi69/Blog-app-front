import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';

const routes: Routes = [
  {path:"", redirectTo:"/ajout", pathMatch:"full"},
  {path:"ajout", component: AjoutComponent},
  {path:"show", component: ListBlogsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
