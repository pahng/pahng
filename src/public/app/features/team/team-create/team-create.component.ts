import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LoggerService } from '../../../core/logger.service';
import { TeamService } from '../team.service';

export interface Team {
  team_name: string;
  team_slogan: string;
  member_one: string;
  member_two: string;
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
    member_one: '',
    member_two: '',
};

  public title = 'Create Team';

  constructor(
    private formBuilder: FormBuilder,
    private logger: LoggerService,
    private teamService: TeamService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      team_name: ['', Validators.required],
      team_slogan: ['', Validators.required],
      member_one: ['', Validators.required],
      member_two: ['', Validators.required],
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