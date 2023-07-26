import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent {
selectTag:string="";
blogData:{tag:string,title:string,description:string,img:string}[]=[];
addInput() {

     if (this.selectTag && this.selectTag.trim() !== '') {
       this.blogData.push({ tag: this.selectTag, title: '', description: '', img: '' });
       this.selectTag = '';
       console.log(this.blogData);
     }
   }
   addBlog(){
   var  article={
    }
    this._shared.createNewArticle(this.blogData)
    .subscribe(
      (res: any) => {
        console.log(this.blogData)
        this.blogData = []; 
      },
      (err: any) => {
        console.log(err);
      }
    );
   }



  constructor(public _shared: SharedService) { }
}
