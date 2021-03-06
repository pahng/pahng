import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { Team } from '../models/team';
import { LoggerService } from '../../core/logger.service';

@Injectable()
export class TeamService {

    constructor(private logger: LoggerService, private http: HttpClient) { }

    /**
     * Gets all the teams from the backend.
     *
     * @return {Observable<Team[]>}
     */
    public getTeams(): Observable<Team[]> {
        return this.http.get<Team[]>(`/api/teams`);
    }

    /**
     * Saves a new team to the database
     *
     * @param {Team} team
     * @return {Observable<Team>}
     */
    public saveTeam(team: Team): Observable<Team> {
        return this.http.post<any>(`/api/teams`, team).pipe(
            tap(response => this.logger.log(response)),
            map(response => team)
        );
    }
}
