import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as sliderData from './slider.json';

interface Sliders {
  id: number;
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state(
        'void',
        style({
          transform: 'translateY(120px)',
          opacity: 0,
        })
      ),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  slider: Sliders[] = (sliderData as any).default;

  currentSlideIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.slider.length;
    }, 5000);
    //
    //
    // $(window).on('load', function () {
    //   $('.name, .desc').css({
    //     transform: 'translateY(0)',
    //     opacity: '1',
    //   });
    //   $('.slide-bg').css({
    //     transform: 'translateY(0)',
    //     opacity: '1',
    //   });
    // });

    $(window).on('click', function () {
      $('.name, .desc').css({
        transform: 'translateY(0)',
        opacity: '1',
      });
    });
  }
}
