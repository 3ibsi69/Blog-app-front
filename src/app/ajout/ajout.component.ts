import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent {
  selectTag: ''|'title' | 'description' | 'img' = '';
  blogData: { tag: string, value: string }[] = [];

  addInput() {
    if (this.selectTag && this.selectTag.trim() !== '') {
      this.blogData.push({ tag: this.selectTag, value: '' });
      this.selectTag = '';
    }
  }

  addBlog() {
    const articleData: { [key: string]: string | string[] } = {}; 
    this.blogData.forEach(item => {
      if (articleData[item.tag]) {
        (articleData[item.tag] as string[]).push(item.value);
      } else {
        articleData[item.tag] = [item.value];
      }
    });

    this._shared.createNewArticle(articleData)
      .subscribe(
        (res: any) => {
          this.blogData = []; 
        },
        (err: any) => {
          console.log(err); 
        }
      );
  }

  constructor(public _shared: SharedService) { }
}
