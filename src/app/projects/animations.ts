import { trigger, state, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
    padding: '19px'
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.05)'
    })),
    animate(200)
  ]),
  transition('marked => default', [
    style({
      border: '1px solid blue',
      padding: '20px'
    }),
    animate('300ms ease-out')
  ]),
  // transition('marked => default', animate('300ms ease-out')),
]);

export const itemStatetrigger = trigger('itemState', [
  transition(':enter', [
    animate('1000ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateX(20%)',
        offset: 0.4
      }),
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 1
      })
    ]))
  ]),
  transition(':leave', [
    animate('1000ms ease-in', keyframes([
      style({
        opacity: 1,
        transform: 'translateX(0)',
        offset: 0
      }),
      style({
        opacity: 1,
        transform: 'translateX(-20%)',
        offset: 0.3
      }),
      style({
        opacity: 0,
        transform: 'translateX(100%)',
        offset: 1
      })
    ]))
  ]),
  transition('slidUp => slidDown', [
    animate('1000ms ease-out', keyframes([
      style({
        transform: 'translateY(-100%)'
      }),
      style({
        transform: 'translateY(0)'
      })
    ]))
  ]),
  transition('slidDown => slidUp', [
    animate('1000ms ease-in', keyframes([
      style({
        transform: 'translateY(0)'
      }),
      style({
        transform: 'translateY(-100%)'
      })
    ]))
  ])
]);

export const slideStateTrigger = trigger('slideState', [
  transition(':enter', [
    animate('2000ms ease-out', keyframes([
      style({
        transform: 'translateY(-100%)'
      }),
      style({
        transform: 'translateY(0)'
      })
    ]))
  ]),
  transition(':leave', [
    animate('2000ms ease-in', keyframes([
      style({
        transform: 'translateY(0)'
      }),
      style({
        transform: 'translateY(-100%)'
      })
    ]))
  ]),
]);

export const listStateTrigger = trigger('listState', [
  transition('* => *', [
    query(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      stagger(1000, [
        animate('1000ms ease-out', keyframes([
          style({
            opacity: 1,
            transform: 'translateX(20%)',
            offset: 0.4
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1
          })
        ]))
      ]),
    ], {optional: true})
  ])
]);
