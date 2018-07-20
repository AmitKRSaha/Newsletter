import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from './progress-bar.service';
import * as html2canvas from 'html2canvas';
// import * as canvas2Image from 'Canvas2Image';
// import * as canvas2Image from 'canvas2image';
import * as $ from 'jquery';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Newsletter';
  textFile = null;
  completedSections: any = {
    sectionHead: {
      status: 'inactive'
    },
    businessupdate: {
      status: 'inactive'
    },
    opportunityInPipeline: {
      status: 'inactive'
    },
    acheivement: {
      status: 'inactive'
    },
    planned: {
      status: 'inactive'
    },
    projstat: {
      status: 'inactive'
    },
    tech: {
      status: 'inactive'
    },
    brainteaser: {
      status: 'inactive'
    },
    healthcare: {
      status: 'inactive'
    },
    brainteaseranswer: {
      status: 'inactive'
    },
    teamandbirthday: {
      status: 'inactive'
    },
  };

  expandtoggle: any = {
    sectionHead: {
      status: 'open'
    },
    businessupdate: {
      status: 'closed'
    },
    acheivement: {
      status: 'closed'
    },
    planned: {
      status: 'closed'
    },
    planningsection: {
      status: 'closed'
    },
    projectsection: {
      status: 'closed'
    },
    technicalsection: {
      status: 'closed'
    },
    brainteasersection: {
      status: 'closed'
    },
    healthsection: {
      status: 'closed'
    },
    brainteaseranssection: {
      status: 'closed'
    },
    teamandbirthday: {
      status: 'closed'
    },
  };

  line: any = {
    sectionHead: {
      status: 'inactive'
    },
    businessupdate: {
      status: 'inactive'
    },
    opportunityInPipeline: {
      status: 'inactive'
    },
    acheivement: {
      status: 'inactive'
    },
    planned: {
      status: 'inactive'
    },
    projstatInPipeline: {
      status: 'inactive'
    },
    tech: {
      status: 'inactive'
    },
    brainteaser: {
      status: 'inactive'
    },
    healthtips: {
      status: 'inactive'
    },
    brainteaserans: {
      status: 'inactive'
    },
    teamandbirthday: {
      status: 'inactive'
    }
  };


  constructor(private progressBarService: ProgressBarService) {
  }

  ngOnInit() {
  }


  test(text) {
    let imagePath;

    html2canvas(document.querySelector('.finalnewsletter')).then(canvas => {
      document.body.appendChild(canvas);
      // window.open().document.write('<img src="' + canvas.toDataURL() + '" />');
      // canvas2Image.saveAsPNG(canvas);
      imagePath = canvas.toDataURL('image/png');
    //   $.ajax({
    //     type: 'post',
    //     url: 'http://localhost:3001/upload',
    //     data: {
    //         image: imagePath
    //     },
    //     error: function(e) {
    //         console.error(e);
    //     },
    //     success: function(response) {
    //         console.log(response);
    //         const imageHTML = '<img ' +
    //             'src="' + response + '" img/>';
    //         console.log(imageHTML);

    //         // //Add an image as a link
    //         // Office.cast.item.toItemCompose(Office.context.mailbox.item).body.setSelectedDataAsync(imageHTML, {
    //         //         coercionType: Office.CoercionType.Html,
    //         //     },
    //         //     function(asyncResult) {
    //         //         if (asyncResult.status === Office.AsyncResultStatus.Failed) {
    //         //             app.showNotification("Action failed with error: " + asyncResult.error.message);
    //         //         }
    //         //     });
    //     }
    // });


      // $('#test').attr('href', canvas.toDataURL('image/png'));
      // $('#test').attr('download', 'Test file.png');
      // $('#test')[0].click();
      const finalData = data + '<img src= "' +  imagePath + '" />' + bottomData;
      const downloadedfileData = heading + finalData;
      console.log(downloadedfileData);
      const hrefValue = this.makeFile(downloadedfileData);
      const finalValue = '<a download="message.eml" id="downloadlink" href="' + hrefValue + '">Download</a>';
      const val =  '<textarea id="textbox" style="width: 300px; height: 600px;">' + downloadedfileData + '</textarea>';
      window.open().document.write( finalValue +  finalData + val);
    });

    const heading = `To:AmitKrSaha
<amisaha@publicisgroupe.net>
Subject: Subject
X-Unsent: 1
Content-Type: text/html

    `;

    const data = `
<html>
<head>
</head>
<body>
<table width=100%>
	<tr>
		<td>
`;

    const bottomData = `
    </td>
  </tr>
</table>
</body>
</html>`;

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
