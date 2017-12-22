import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { User } from './register.component';
import { LoggerService } from '../../core/logger.service';

@Injectable()
export class RegisterService {

    constructor(private logger: LoggerService, private http: HttpClient) { }

    /**
     * Save the new user to the database
     *
     * @param {User} user
     * @return {Observable<User>}
     */
    public save(user: User): Observable<User> {
        return this.http.post<any>(`api/create_user`, user).pipe(
            tap(response => this.logger.log(response)),
            map(response => user)
        );
    }
}
