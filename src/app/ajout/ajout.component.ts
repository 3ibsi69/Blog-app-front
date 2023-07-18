import { Component } from '@angular/core';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})


export class AjoutComponent {

  
article = {
  titre: '',
  description: '',
  picture: '',
  date: '',
};


 articles :any[]=[];


  constructor() { }

  ngOnInit(): void {
  }


}
