import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';
import { TechnicalArticleComponent } from '../technical-article/technical-article.component';

@Component({
  selector: 'app-project-statistics',
  templateUrl: './project-statistics.component.html',
  styleUrls: ['./project-statistics.component.css']
})
export class ProjectStatisticsComponent implements OnInit {
  projectstatshoworhide: any = '';
  @Input() technicalarticle: TechnicalArticleComponent;
  @Input() completedSections: any;
  @Input() expandtoggle: any;
  @Input() line: any;

  userFormuserProjstat = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  constructor(private progressBarService: ProgressBarService) { }

  ngOnInit() {
  }

  get users(): FormArray {
    return this.userFormuserProjstat.get('users') as FormArray;
  }

  onFormSubmit() {
    this.completedSections.projstat.status = 'completed';
    this.line.projstatInPipeline.status = 'completed';
    this.progressBarService.addItemInList(['opportunitysection', this.userFormuserProjstat.value]);
    this.projectstatshoworhide = 'hide';
    this.technicalarticle.toggletecharticle('show');
  }
  addMoreInputBox() {
    this.users.push(new FormControl());
  }
  toggle(showorhide: string) {
    this.projectstatshoworhide = showorhide;
  }
  showActive() {
    this.completedSections.projstat.status = 'active';
    this.line.projstatInPipeline.status = 'active';
  }
  expandMoreOrLess() {
    this.expandtoggle.projectsection.status = (this.expandtoggle.projectsection.status === 'open') ? 'closed' : 'open';
  }
}
