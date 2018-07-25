import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from './progress-bar.service';
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

  line: any = line


  constructor(private progressBarService: ProgressBarService) {
  }

  ngOnInit() {
  }


  test(text) {
    let imagePath;

    html2canvas(document.querySelector('.finalnewsletter')).then(canvas => {
      // document.body.appendChild(canvas);
      // window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
      // canvas2Image.saveAsPNG(canvas);
      imagePath = canvas.toDataURL('image/png');

       imagePath = 'http://localhost:4200/assets/tea.png';

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
    <td><img src="` + imagePath + `" width="100%" height="57" alt=""></td>
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
      // const finalValue = '<a download="message.eml" id="downloadlink" href="' + hrefValue + '">Download</a>';
       const val1 =  val;
      // window.open().document.write( finalValue +  finalData + val);

      const hrefValue = this.makeFile(val);
      window.open().document.write('<a download="message.eml" id="downloadlink" style="display: visible" href="' +  hrefValue + '">Download</a>' + val + '<textarea style="width: 300px; height: 600px;">' + val + '</textarea>');
    });

    imagePath = 'http://localhost:4200/assets/tea.png';

    const val5 = `To: User <user@domain.demo>
Subject: Subject
X-Unsent: 1
Content-Type: text/html

<html>
<head>
</head>
<body>
<table width=100%>
    <tr>
      <td><img src="` + imagePath + `" width="200" height="57" alt=""></td>
    </tr>
</table>
</body>
</html>

    `;

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
