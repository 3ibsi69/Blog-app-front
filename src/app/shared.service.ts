import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) { }
 private url="http://localhost:3000/";


  createNewArticle(article:any){

     return this.http.post(this.url,article);

  }

  getAllArticles(){
    return this.http.get(this.url);
  }

  deleteArticle(id:any){   
    return this.http.delete(this.url+id);
  }

  getArticleById(id:any){
    return this.http.get(this.url+id);
  }

  updateArticle(id:any,article:any){
    return this.http.put(this.url+id,article);
  }
  


  
}
