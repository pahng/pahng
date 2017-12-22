import { trigger, animate, transition, state, style } from '@angular/animations';

export const flipAnimation = trigger('flipAnimation', [
    transition(':enter', [
        style({ transform: 'rotateY(0)' }),
        animate('0.5s', style({ transform: 'rotateY(179.9deg)' })),
    ]),
    transition(':leave', [
        style({ transform: 'rotateY(179.9deg)' }),
        animate('0.5s', style({ transform: 'rotateY(0)' })),
    ]),
    // state('active', style({
    //     transform: 'rotateY(179.9deg)'
    // })),
    // state('inactive', style({
    //     transform: 'rotateY(0)'
    // })),
    // transition('active => inactive', animate('500ms ease-out')),
    // transition('inactive => active', animate('500ms ease-in')),
]);
