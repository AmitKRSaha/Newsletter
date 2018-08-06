import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';

@Component({
  selector: 'app-businessupdate-preview',
  templateUrl: './businessupdate-preview.component.html',
  styleUrls: ['./businessupdate-preview.component.css']
})
export class BusinessupdatePreviewComponent implements OnInit {

  backgroundImage = 'http://localhost:3001/file-1533059929487.jpg';

  constructor(public progressBarService: ProgressBarService) { }

  ngOnInit() {

  }

}
