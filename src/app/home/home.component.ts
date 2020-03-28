import {Component, OnInit} from '@angular/core';
import {CardModel} from '../../models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: string[];
  cards: CardModel[];

  constructor() {
    this.images = [];
    this.cards = [];
  }

  ngOnInit() {
    this.images = [
      '/assets/images/portfolio-img1.jpg',
      '/assets/images/portfolio-img2.jpg',
      '/assets/images/portfolio-img3.jpg',
      '/assets/images/portfolio-img4.jpg',
      '/assets/images/portfolio-img5.jpg',
      '/assets/images/portfolio-img6.jpg',
      '/assets/images/portfolio-img7.jpg'
    ];
    this.cards = [
      {
        icon: 'fa fa-laptop',
        headline: 'Responsive',
        paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
        color: 'divider-one'
      },
      {
        icon: 'fa fa-mobile',
        headline: 'Valod',
        paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
        color: 'divider-two'
      },
      {
        icon: 'fa fa-life-ring',
        headline: 'Valoduhi',
        paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.',
        color: 'divider-three'
      },

    ];
  }


}
