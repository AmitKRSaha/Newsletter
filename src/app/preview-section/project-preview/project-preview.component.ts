import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';

@Component({
  selector: 'app-project-preview',
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.css']
})
export class ProjectPreviewComponent implements OnInit {

  constructor(public progressBarService: ProgressBarService) { }

  ngOnInit() {
  }

}
