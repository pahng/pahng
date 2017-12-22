import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanLoad,
    CanActivateChild,
    Route
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(private authService: AuthService) {}

    /**
     * Verifies if the user can activate the provided route.
     *
     * @public
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @return {Observable<boolean> | Promise<boolean> | boolean}
     */
    public canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const url: string = state.url;
        return this.checkIfLoggedIn(url);
    }

    /**
     * Verifies if user can activate the requested child routes.
     *
     * @public
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @return {boolean}
     */
    public canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }

    /**
     * Verifies if user can load the needed module.
     *
     * @public
     * @param {Route} route
     * @return {boolean}
     */
    public canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        const url = `/${route.path}`;
        return this.checkIfLoggedIn(url);
    }

    /**
     * Checks if there is currently a logged in user. If the user is not logged in then the
     * requested url is stored in local cache and then delegates to the AuthService to log
     * the user in. After logging in, the requested url will be used to redirect the user
     * to that page, although it will still pass through the guard again and validate that
     * the user can load the requested page.
     *
     * @private
     * @param {string} url
     * @return {boolean}
     */
    private checkIfLoggedIn(url: string): boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }
        localStorage.setItem('returnUrl', url);
        this.authService.login();
        return false;
    }

}
