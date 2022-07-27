import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromRoot from '@app/store';
import * as fromNavigation from '@app/store/navigation';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  title: string = 'Components';
  cardsList: Array<any> = []
  constructor(
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new fromNavigation.NavClose);
    this.cardsList = [
      {
        imgUrl:'https://upload.chien.com/img_global/25-anatomie/petit-chien-les-20-races-de-chiens-les-plus-petites-du-monde/_xlight-16228_9276-un-petit-chien-joue-avec-son-ours-en-peluche.jpg',
        title: 'Header',
        content: 'Un header customisable',
        url: '/angular/components/header'
      },
      {
        imgUrl:'https://buzzly.fr/uploads/thumb/960/phpWMwyRw.jpg',
        title: 'Card',
        content: 'Une Card customisable',
        url: '/angular/components/cards'
      },
      {
        imgUrl:'https://static.actu.fr/uploads/2020/04/chat-960x640.jpeg',
        title: 'Footer',
        content: 'Un footer customisable',
        url: '/angular/components/footer'
      },
    ]
  }

}
