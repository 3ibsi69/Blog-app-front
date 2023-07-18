import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-list-blogs',
  templateUrl: './list-blogs.component.html',
  styleUrls: ['./list-blogs.component.scss']
})
export class ListBlogsComponent {


  Articles:any ;

  constructor(public _shared:SharedService) { }

  ngOnInit(): void {
    this._shared.getAllArticles()
    .subscribe(
      res=>{
        this.Articles = res;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
