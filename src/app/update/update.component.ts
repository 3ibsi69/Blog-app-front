import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {


  article :any;
  id:any;

  constructor( private act:ActivatedRoute,private _shared: SharedService, private router:Router ) { }

update(){
  this._shared.updateArticle(this.id,this.article)
  .subscribe(
    res=>{
      console.log(res);
      this.router.navigate(['/show']);
    },
    err=>{
      console.log(err);
    }
  )
};
  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    console.log(this.id);
    this._shared.getArticleById(this.id)
    .subscribe(
      res=>{
        this.article = res;
      },
      err=>{
        console.log(err);
      }

    )



  }




}
