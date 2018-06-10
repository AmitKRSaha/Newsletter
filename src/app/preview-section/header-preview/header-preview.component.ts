import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';
import { Observable, of, from } from 'rxjs';


@Component({
  selector: 'app-header-preview',
  templateUrl: './header-preview.component.html',
  styleUrls: ['./header-preview.component.css']
})
export class HeaderPreviewComponent implements OnInit {

  filePath: Observable<any>;
  constructor(private changeDetectorRef: ChangeDetectorRef, public progressbar: ProgressBarService) { }


  ngOnInit() {
  }

}
