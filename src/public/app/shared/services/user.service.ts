import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from '../../core/logger.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable()
export class UserService {

    constructor(private logger: LoggerService, private http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(`api/users`).pipe(
            tap(response => this.logger.log(response))
        );
    }

}
