import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';

@Component({
  selector: 'app-businessupdate-preview',
  templateUrl: './businessupdate-preview.component.html',
  styleUrls: ['./businessupdate-preview.component.css']
})
export class BusinessupdatePreviewComponent implements OnInit {


  constructor(public progressBarService: ProgressBarService) { }

  ngOnInit() {

    }

}
