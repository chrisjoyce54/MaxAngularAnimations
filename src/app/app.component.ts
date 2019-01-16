import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, query, style, animate, group, animateChild } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      transition('* => *', [
        group([
          query(':enter', [
            animateChild(),
            style({
              transform: 'translateY(-400ps)',
              opacity: 0
            }),
            animate('300ms ease-out')
          ], {optional: true}),
          query(':leave', [
            animate('300ms ease-out',
            style({
              transform: 'translateY(600ps)',
              opacity: 0
            }), )
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {
  getAnimationData(outlet: RouterOutlet) {
    const routData = outlet.activatedRouteData['myAnimation'];
    if (!routData) {
      return 'rootPage';
    }
    return routData['myPage'];
  }
}
