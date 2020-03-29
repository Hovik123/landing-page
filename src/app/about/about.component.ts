import { Component, OnInit } from '@angular/core';
import {CrewMemberModel} from '../../models/crew-member.model';
import {ProgressModel} from '../../models/progress';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  crewMembers: CrewMemberModel[];
  progressBars: ProgressModel[];

  constructor() {
    this.crewMembers = [];
    this.progressBars = [];
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
    this.progressBars = [
      {name: 'HTML5  CSS3',
        width: 90,
        status: 'progress-bar progress-bar-warning'
      },
      {name: 'Bootstrap',
        width: 80,
        status: 'progress-bar progress-bar-danger'
      },
      {name: 'Ux design',
        width: 70,
        status: 'progress-bar -bar-primary'
      }
    ];
  }

}
