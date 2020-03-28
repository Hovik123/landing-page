import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recent-project',
  templateUrl: './recent-project.component.html',
  styleUrls: ['./recent-project.component.scss']
})
export class RecentProjectComponent implements OnInit {
  @Input() url: string;

  constructor() {
  }

  ngOnInit() {
  }

}
