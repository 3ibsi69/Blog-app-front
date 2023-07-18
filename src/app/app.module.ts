import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjoutComponent } from './ajout/ajout.component';
import { FormsModule } from '@angular/forms';
import { ListBlogsComponent } from './list-blogs/list-blogs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    AjoutComponent,
    ListBlogsComponent,
    NavbarComponent,
    NotfoundComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
