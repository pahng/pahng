import { group, trigger, animate, transition, style, query, animateChild } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [
    transition('* => *', [
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        query(':leave', style({ zIndex: 100 })),
        query(':enter', style({ transform: 'translateY(100%)' })),

        group([
            query(':leave', group([
                animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(-100%)' })), // y: '-100%'
                animateChild()
            ])),
            query(':enter', group([
                animate('500ms cubic-bezier(.35,0,.25,1)', style({ transform: 'translateY(0%)' })),
                animateChild()
            ]))
        ])
    ]),
    // transition('* <=> *', [
    //     query(':enter, :leave',
    //         style({ position: 'fixed', width: '100%' }), { optional: true }),
    //     group([
    //         query(':enter', [
    //             style({ transform: 'translateX(100%)' }),
    //             animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' })),
    //         ], { optional: true }),
    //         query(':leave', [
    //             style({ transform: 'translateX(0%)' }),
    //             animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' })),
    //         ], { optional: true }),
    //     ])
    // ])
]);
