import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from '../../../core/logger.service';
import { TeamService } from '../team.service';
import { UserService } from '../../../shared/services/user.service';
import { Observable } from 'rxjs/Observable';
import { User } from '../../../shared/models/user';
import { share } from 'rxjs/operators';

export interface Team {
    team_name: string;
    team_slogan: string;
    member_one: number;
    member_two: number;
}

@Component({
    selector: 'png-team-create',
    templateUrl: './team-create.component.html',
    styleUrls: ['./team-create.component.scss']
})

export class TeamCreateComponent implements OnInit {

    public form: FormGroup;

    private team: Team = {
        team_name: '',
        team_slogan: '',
        member_one: null,
        member_two: null,
    };

    public title = 'Create Team';

    public users: Observable<User[]>;

    constructor(
        private formBuilder: FormBuilder,
        private logger: LoggerService,
        private teamService: TeamService,
        private userService: UserService,
        private route: ActivatedRoute,
        private router: Router,
    ) {
        this.users = this.userService.getUsers().pipe(
            share()
        );
        this.form = this.formBuilder.group({
            team_name: ['', Validators.required],
            team_slogan: ['', Validators.required],
            member_one: [null, Validators.required],
            member_two: [null, Validators.required],
        });
    }

    ngOnInit() {
    }

    submit() {
        if (this.form.valid) {
            this.team.team_name = this.form.value.team_name;
            this.team.team_slogan = this.form.value.team_slogan;
            this.team.member_one = this.form.value.member_one;
            this.team.member_two = this.form.value.member_two;
            this.teamService.saveTeam(this.team)
                .subscribe(() => this.router.navigate(['/']));
        }
    }

}
