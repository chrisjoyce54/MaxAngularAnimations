import { trigger, state, style, transition, group, animate } from '@angular/animations';
import { setClassMetadata } from '@angular/core/src/render3';
import { preserveWhitespacesDefault } from '@angular/compiler';

export const buttonStateTrigger = trigger('buttonState', [
  state('valid', style({
    backgroundColor: 'green'
  })),
  state('invalid', style({
    backgroundColor: 'red',
    color: 'white',
    borderColor: 'darkred'
  })),
  transition('invalid => valid', [
    group([
      animate(100, style({
        transform: 'scale(1.1)'
      })),
      animate(200, style({
        backgroundColor: 'green'
      }))
    ]),
    animate(200, style({
      transform: 'scale(1)'
    })),
    transition('valid => invalid', [
      group([
        animate(100, style({
          transform: 'scale(1.1)'
        })),
        animate(200, style({
          backgroundColor: 'red'
        }))
      ]),
      animate(200, style({
        transform: 'scale(1)'
      }))
  ])
])
]);
