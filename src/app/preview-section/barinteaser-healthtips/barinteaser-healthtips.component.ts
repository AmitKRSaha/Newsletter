import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';

@Component({
  selector: 'app-barinteaser-healthtips',
  templateUrl: './barinteaser-healthtips.component.html',
  styleUrls: ['./barinteaser-healthtips.component.css']
})
export class BarinteaserHealthtipsComponent implements OnInit {

  constructor(public progressBarService: ProgressBarService ) { }

  ngOnInit() {
  }

}
