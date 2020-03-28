import {Component, Input, OnInit} from '@angular/core';
import {ProgressModel} from '../../../../models/progress';

@Component({
  selector: 'app-progresses',
  templateUrl: './progresses.component.html',
  styleUrls: ['./progresses.component.scss']
})
export class ProgressesComponent implements OnInit {
  @Input() ProgressBar: ProgressModel;

  constructor() {
  }

  ngOnInit() {
  }

}
