import { trigger, state, animate, transition, style } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
    state('*',
        style({
            opacity: 1,
            transform: 'translateX(0)'
        })
    ),
    transition('void => *', [
        style({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
    ]),
    transition('* => void', [
        animate('0.5s ease-out', style({
            opacity: 0,
            transform: 'translateY(100%)'
        }))
    ])
]);
