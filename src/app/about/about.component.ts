import { Component, OnInit } from '@angular/core';
import {CrewMemberModel} from '../../models/crew-member.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  crewMembers: CrewMemberModel[];

  constructor() {
    this.crewMembers = [];
  }

  ngOnInit() {
    this.crewMembers = [
      {imgUrl: '/assets/images/team1.jpg',
      name: 'LINDA',
      position: 'Creative Director',
      about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.'},
      {imgUrl: '/assets/images/team2.jpg',
        name: 'JULIA',
        position: 'UX Designer',
        about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.'},
      {imgUrl: '/assets/images/team3.jpg',
        name: 'MARY',
        position: 'Frontend Developer',
        about: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.'}
    ];
  }

}
