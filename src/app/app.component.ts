import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
      {
        title: 'Un magnifique premier post',
        content: 'Je suis un premier post de qualité',
        loveIts: "1",
        createdAt : 'dateTemporaire',
      },
      {
        title: 'Un tristounet second post',
        content: 'Les autres posts sont mieux que moi..',
        loveIts: "-1",
        createdAt : 'dateTemporaire',
      },
      {
        title: 'Un troisième post indifferent',
        content: 'Je suis troisième. Meh.',
        loveIts: "1",
        createdAt : 'dateTemporaire',
      }
  ];
}
