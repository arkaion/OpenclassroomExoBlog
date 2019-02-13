import { Component,Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistitemcomponent',
  templateUrl: './postlistitemcomponent.component.html',
  styleUrls: ['./postlistitemcomponent.component.scss']
})
export class PostlistitemcomponentComponent implements OnInit {

 @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date;
  


  constructor() { }

  ngOnInit() {
  }

  getColor() {
  }

  onDontLoveIt() {
    this.postLoveIts--;
  }

  onLoveIt() {
    this.postLoveIts++;
  }

}