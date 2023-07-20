import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss'],
})
export class AjoutComponent {
  article:any = {
    title: '',
    description: '',
    picture: '',
    date: '',
  };
  selectedTag: string = '';
  blogData: { tag: string, content: string }[] = [];
  preview : any = null


  addInput(){
    if(this.selectedTag && this.selectedTag.trim() !== ''){
      this.blogData.push({tag:this.selectedTag, content:''});
      this.selectedTag = '';
    }
  }




  addArticle() {
   this._shared.createNewArticle(this.article)
   .subscribe(
      res=>{
        this.article = {
          title: '',
          description: '',
          picture: '',
          date: '',
        };
      },
      err=>{
        console.log(err);
      }

    )
  
  }
  

  constructor( public _shared:SharedService ) {}

  ngOnInit(): void {}
}
