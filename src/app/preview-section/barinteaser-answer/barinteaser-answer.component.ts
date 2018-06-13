import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';

@Component({
  selector: 'app-barinteaser-answer',
  templateUrl: './barinteaser-answer.component.html',
  styleUrls: ['./barinteaser-answer.component.css']
})
export class BarinteaserAnswerComponent implements OnInit {

  constructor(public progressBarService: ProgressBarService) { }

  ngOnInit() {
  }

}
