import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';
import { Observable, of, from, Subscription } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-header-preview',
  templateUrl: './header-preview.component.html',
  styleUrls: ['./header-preview.component.css']
})
export class HeaderPreviewComponent implements OnInit {

  filePath: any;
  subscription: Subscription;
  constructor(private changeDetectorRef: ChangeDetectorRef, public progressbar: ProgressBarService) {
    // this.progressbar.getItemFromList().subscribe(
    //   t => this.filePath = t
    // );

    this.subscription = progressbar.content$.subscribe(
      mission => {
        this.filePath = JSON.stringify(mission['headerimage']);
        console.log('file ' + this.filePath);

    });
   }


  ngOnInit() {
    // this.filePath = this.progressbar.getItemFromList;

  }

}
