import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss'],
})
export class AjoutComponent {



  article = {
    title: '',
    description: '',
    picture: '',
    date: '',
  };


  addArticle() {
    this._shared.articles.push(this.article);
    this.article = {
      title: '',
      description: '',
      picture: '',
      date: '',
    };
  }

  constructor( public _shared:SharedService ) {}

  ngOnInit(): void {}
}
