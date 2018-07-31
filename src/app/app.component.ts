import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from './progress-bar.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import * as html2canvas from 'html2canvas';
import * as $ from 'jquery';
import { completedSections } from '../app/models/completed-section';
import { expandtoggle } from '../app/models/toggle-options';
import { line } from '../app/models/line';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Newsletter';
  textFile = null;

  completedSections = completedSections;

  expandtoggle = expandtoggle;

  line: any = line;
  imagePath: any ;


  constructor(private sanitizer: DomSanitizer, private progressBarService: ProgressBarService, private http: HttpClient ) {
  }

  ngOnInit() {
  }


  test(text) {


    html2canvas(document.querySelector('.finalnewsletter')).then(canvas => {
      // document.body.appendChild(canvas);
      // window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
      // canvas2Image.saveAsPNG(canvas);
      this.imagePath = canvas.toDataURL('image/png');
      this.http.post('http://localhost:3001/uploadscreenshot', this.imagePath)
      .toPromise()
      .then(x => console.log(x));
      this.imagePath = 'http://localhost:3001/screen.png';

      const val = `To: User <user@domain.demo>
Subject: Subject
X-Unsent: 1
Content-Type: text/html

<html>
<head>
</head>
<body>
<table width=100%>
  <tr>
    <td><img src="` + this.imagePath + `" width="100%" height="100%" alt=""></td>
  </tr>
</table>
</body>
</html>

          `;

      // $('#test').attr('href', canvas.toDataURL('image/png'));
      // $('#test').attr('download', 'Test file.png');
      // $('#test')[0].click();
      // imagePath = './assets/tea.png';
      // const finalData = data + '<img src= "' +  imagePath + '" />' + bottomData;
      // const downloadedfileData = heading + finalData;
      // console.log(downloadedfileData);
      // const hrefValue = this.makeFile(downloadedfileData);
       const finalValue = '<textarea style="width: 300px; height: 600px;">' + val + '</textarea>';
       const val1 =  val;
      // window.open().document.write( finalValue +  finalData + val);
      // this.http.get('http://localhost:3001/file-1532116274008.png', { responseType: 'blob' })
      // .toPromise()
      // .then(data => this.showImage(data));

      const hrefValue = this.makeFile(val);
      const outputValue = '<a download="message.eml" id="downloadlink" style="display: visible" href="' +  hrefValue;
      window.open().document.write(outputValue + '">Download</a>' + val + finalValue);
    });
 }

  showImage(data: any): any {
    console.log(data);
    const urlCreator = window.URL;
    const imgsrc = this.sanitizer.bypassSecurityTrustUrl(
            urlCreator.createObjectURL(data));

  }

  makeFile(text) {
    const data = new Blob([text], {type: 'text/plain'});
    if (this.textFile !== null) {
      window.URL.revokeObjectURL(this.textFile);
    }
    this.textFile = window.URL.createObjectURL(data);
    return this.textFile;
  }
}
