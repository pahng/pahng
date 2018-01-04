import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { TeamService } from '../../../shared/services/team.service';
import { Team } from '../../../shared/models/team';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../shared/models/user';

@Component({
    selector: 'png-teams-list',
    templateUrl: './teams-list.component.html',
    styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

    public teams: Observable<Team[]>;
    public users: User[];

    constructor(private teamService: TeamService, private userService: UserService) {
        this.teams = this.teamService.getTeams();
        this.userService.getUsers().subscribe(users => this.users = users);
    }

    ngOnInit() {
    }

    public getUserById(id: number): User {
        return this.users.find(user => user.id.toString() === id.toString());
    }

}
