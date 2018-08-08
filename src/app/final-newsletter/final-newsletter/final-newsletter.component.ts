import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from '../../progress-bar.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-final-newsletter',
  templateUrl: './final-newsletter.component.html',
  styleUrls: ['./final-newsletter.component.css']
})
export class FinalNewsletterComponent implements OnInit {
  imgsrc: any;
  month = 'Amit';

  constructor( public progressbar: ProgressBarService, private http: HttpClient,
    private sanitizer: DomSanitizer, ) { }

  ngOnInit() {
    // this.http.get('http://localhost:3001/file-1533616682743.jpg', { responseType: 'blob' })
    //     .toPromise()
    //     .then(data => this.showImage(data));
    const month = new Array();
    month[0] = 'Jan';
    month[1] = 'Feb';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';

    this.month = month[new Date().getMonth()];
  }

  showImage(data: any): any {
    console.log(data);
    const urlCreator = window.URL;
    this.imgsrc = this.sanitizer.bypassSecurityTrustUrl(
            urlCreator.createObjectURL(data));

  }
}
