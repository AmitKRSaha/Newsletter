import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';

@Component({
  selector: 'app-technical-preview',
  templateUrl: './technical-preview.component.html',
  styleUrls: ['./technical-preview.component.css']
})
export class TechnicalPreviewComponent implements OnInit {

  constructor(public progressBarService: ProgressBarService ) { }

  ngOnInit() {
  }

}
