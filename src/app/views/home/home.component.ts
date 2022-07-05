import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(window).on('scroll', function () {
      $('.inner-image, .inner-head').css({
        transform: 'translateY(0)',
        opacity: '1',
      });
    });
    $(window).on('scroll', function () {
      $('.our-clients-img, .our-clients-head').css({
        transform: 'translateY(0)',
        opacity: '1',
      });
    });
  }
}
