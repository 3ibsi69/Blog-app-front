import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutComponent } from './ajout/ajout.component';
import { FormsModule } from '@angular/forms';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    ListBlogsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
