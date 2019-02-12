import { Component , Input , OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistcomponent',
  templateUrl: './postlistcomponent.component.html',
  styleUrls: ['./postlistcomponent.component.scss']
})
export class PostlistcomponentComponent implements OnInit {
  
  @Input() posts: string[];
  
  //console.log(monTableau);
  
  //@Input() postArray;

  constructor() { }

  ngOnInit() {
  }

}
