import { trigger, query, style, animate, group, transition, useAnimation } from '@angular/animations';

export const fadeInOutAnimation = [
  trigger('fadeInOutAnimation', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('.3s', style({ opacity: 1 }))
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('.3s', style({ opacity: 0 }))
    ])
  ])
];
