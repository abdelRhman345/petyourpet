import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    //
    $('.navbar-icon').click(function () {
      $('.navbar-collapse').toggleClass('menu-open');
      $(this).toggleClass('move');
    });
    $('.nav-item').click(function () {
      $('.navbar-collapse').removeClass('menu-open');
      $('.navbar-icon').removeClass('move');
    });

    $(window).on('load', function () {
      $('.brand h2').css({
        transform: 'translateY(0)',
        opacity: '1',
      });
    });
  }
}
