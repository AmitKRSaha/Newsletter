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

  constructor( public progressbar: ProgressBarService, private http: HttpClient,
    private sanitizer: DomSanitizer, ) { }

  ngOnInit() {
    // this.http.get('http://localhost:3001/file-1533616682743.jpg', { responseType: 'blob' })
    //     .toPromise()
    //     .then(data => this.showImage(data));
  }

  showImage(data: any): any {
    console.log(data);
    const urlCreator = window.URL;
    this.imgsrc = this.sanitizer.bypassSecurityTrustUrl(
            urlCreator.createObjectURL(data));

  }
}
