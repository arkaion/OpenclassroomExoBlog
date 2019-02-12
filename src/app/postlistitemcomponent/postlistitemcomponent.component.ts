import { Component,Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitemcomponent',
  templateUrl: './postlistitemcomponent.component.html',
  styleUrls: ['./postlistitemcomponent.component.scss']
})
export class PostlistitemcomponentComponent implements OnInit {

  @Input() post: string[];
  

  constructor() { 
     }

  ngOnInit() {
  }

  //like(){post.loveIts = post.loveIts +1}
  //dislike(){console.log("-1");}
}
