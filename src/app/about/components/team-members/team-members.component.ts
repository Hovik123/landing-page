import {Component, Input, OnInit} from '@angular/core';
import {CrewMemberModel} from '../../../../models/crew-member.model';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {
  @Input() CrewMember: CrewMemberModel;
  constructor() { }

  ngOnInit() {
  }

}
