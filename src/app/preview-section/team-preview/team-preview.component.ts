import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';

@Component({
  selector: 'app-team-preview',
  templateUrl: './team-preview.component.html',
  styleUrls: ['./team-preview.component.css']
})
export class TeamPreviewComponent implements OnInit {

  constructor(public progressbarservice: ProgressBarService) { }

  ngOnInit() {
  }

}
