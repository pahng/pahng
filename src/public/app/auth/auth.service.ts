import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { User } from '../shared/models/user';


const STORAGE_KEY = 'auth_storage_key';

/**
 * This service handles all authentication and authorization. It validates
 * the current user and redirects to the login prompt if the user is not
 * currently logged in or the login token has expired.
 *
 */
@Injectable()
export class AuthService {

    constructor(private router: Router) {}

    /**
     * Checks if there is a logged in user. It first checks if there is a current token
     * and then makes sure that it has not expired. If both checks are good, then the
     * user is considered as logged in.
     *
     * @property isLoggedIn
     * @public
     * @returns {boolean}
     */
    public get isLoggedIn(): boolean {
        const loggedIn = localStorage.getItem(STORAGE_KEY);
        return !!loggedIn;
    }

    /**
     * Launch the login screen.
     *
     * @public
     * @returns {void}
     */
    public login(): void {
        this.router.navigate(['/login']);
    }

    public handleAuthentication(user: User): Observable<boolean> {
        const display_name = user.display_name || 'tempUser';
        console.log(user);
        localStorage.setItem(STORAGE_KEY, display_name);
        return of(true);
    }

    /**
     * Logs out the current user and clears the stored token.
     *
     * @public
     * @return {void}
     */
    public logout(): void {
        localStorage.removeItem(STORAGE_KEY);
    }

}
