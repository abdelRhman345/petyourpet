import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('.welcome').on('mousemove', function (e) {
      this.querySelectorAll('.layer').forEach((layer: any) => {
        const speed = layer.getAttribute('data-speed'),
          x = (e.pageX * speed) / 100,
          y = (e.pageX * speed) / 100;
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
  }
}
