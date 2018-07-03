import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';

@Component({
  selector: 'app-final-newsletter',
  templateUrl: './final-newsletter.component.html',
  styleUrls: ['./final-newsletter.component.css']
})
export class FinalNewsletterComponent implements OnInit {

  constructor( public progressbar: ProgressBarService ) { }

  ngOnInit() {
  }

}
