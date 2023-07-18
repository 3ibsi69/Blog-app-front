import { Component } from '@angular/core';

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

  articles: any[] = [];

  addArticle() {
    this.articles.push(this.article);
    this.article = {
      title: '',
      description: '',
      picture: '',
      date: '',
    };
  }

  constructor() {}

  ngOnInit(): void {}
}
