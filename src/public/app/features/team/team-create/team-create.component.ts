import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'png-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss']
})
export class TeamCreateComponent implements OnInit {

  public title = 'Create Team';

  constructor() { }

  ngOnInit() {
  }

}
