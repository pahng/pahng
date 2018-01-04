import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../../core/logger.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(private logger: LoggerService, private http: HttpClient) { }

    /**
     * Save the new user to the database
     *
     * @param {User} user
     * @return {Observable<User>}
     */
    public save(user: User): Observable<User> {
        return this.http.post<any>(`/api/create_user`, user).pipe(
            tap(response => this.logger.log(response)),
            map(response => user)
        );
    }

    /**
     * Gets all of the users from the backend.
     *
     * @return {Observable<User[]>}
     */
    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`/api/users`).pipe(
            tap(response => this.logger.log(response))
        );
    }

    /**
     * Gets an individual user by their `id`
     *
     * @param {number} id
     * @return {Observable<User>}
     */
    public getUserById(id: number): Observable<User> {
        return this.http.get<User>(`/api/users/${id}`);
    }

}
