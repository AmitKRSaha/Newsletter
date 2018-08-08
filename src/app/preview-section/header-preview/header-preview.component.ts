import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';
import { Observable, of, from, Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { UtilityService } from '../../utility-section/utility.service';


@Component({
  selector: 'app-header-preview',
  templateUrl: './header-preview.component.html',
  styleUrls: ['./header-preview.component.css']
})
export class HeaderPreviewComponent implements OnInit {
  month: string;
  filePath: any;
  subscription: Subscription;
  constructor(private changeDetectorRef: ChangeDetectorRef
    , public progressbar: ProgressBarService
    , public utility: UtilityService
  ) {
    // this.progressbar.getItemFromList().subscribe(
    //   t => this.filePath = t
    // );

    // Working
    // this.subscription = progressbar.content$.subscribe(
    //   mission => {
    //     this.filePath = JSON.stringify(mission['headerimage']);
    //     console.log('file ' + this.filePath);

    // });
   }


  ngOnInit() {
    // this.filePath = this.progressbar.getItemFromList;
    this.month =  this.utility.getMonthName();
  }

}
