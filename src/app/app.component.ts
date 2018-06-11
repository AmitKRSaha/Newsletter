import { Component, OnInit } from '@angular/core';
import { ProgressBarService } from './progress-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
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
    }
  };



  constructor(private progressBarService: ProgressBarService) {
  }

  ngOnInit() {
  }

}
