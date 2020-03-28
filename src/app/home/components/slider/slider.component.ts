import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() images: string[];
  public currentSlide: string;
  public currentIndex: number;

  constructor() {
    this.images = [];
    this.currentIndex = 0;
  }

  ngOnInit() {
    this.currentSlide = this.images[this.currentIndex];
  }

  previous() {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    this.currentSlide = this.images[this.currentIndex];
  }

  next() {
    this.currentIndex++;
    if (this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }
    this.currentSlide = this.images[this.currentIndex];
  }
}
