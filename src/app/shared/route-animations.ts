import { trigger, transition, style, animate, animation, useAnimation } from '@angular/animations';
const fadeAnimation = animation([
  style({
    opacity: '{{ startOpacity }}'
  }),
  animate('{{ startDuration }}')
], {params: {startOpacity: 0, startDuration: '100ms'}});

export const routeFadeStateTrigger = (fadeParams) => trigger('routeFadeState', [
  transition(':enter', [
    useAnimation(fadeAnimation, {params: fadeParams})
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);

export const routeSlideStatetrigger = trigger('routeSlideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)'
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    transform: 'translateY(100%)'
  })))
]);
