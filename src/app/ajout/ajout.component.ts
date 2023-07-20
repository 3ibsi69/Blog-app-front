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
