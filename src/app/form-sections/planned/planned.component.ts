import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressBarService } from '../../progress-bar.service';
import { ProjectStatisticsComponent } from '../project-statistics/project-statistics.component';

@Component({
  selector: 'app-planned',
  templateUrl: './planned.component.html',
  styleUrls: ['./planned.component.css']
})
export class PlannedComponent {
  @Input() projectstat: ProjectStatisticsComponent;
  @Input() completedSections: any;
  @Input() showorhide: string;
  @Input() expandtoggle: any;
  @Input() line: any;



  userFormuserplanned = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  constructor(private progressBarService: ProgressBarService, private route: Router) { }


  get users(): FormArray {
    return this.userFormuserplanned.get('users') as FormArray;
  }

  showActive() {
    this.completedSections.planned.status = 'active';
    this.line.planned.status = 'active';
    this.route.navigateByUrl('planned');
  }

  onFormSubmit() {
    this.completedSections.planned.status = 'completed';
    this.line.planned.status = 'completed';

    this.progressBarService.addItemInList([this.userFormuserplanned.value]);
    this.showorhide = 'hide';
    this.projectstat.toggle('show');
  }
  addMoreInputBox() {
    this.users.push(new FormControl());
  }
  toggle(showorhide: string) {
    this.showorhide = showorhide;
  }
  expandMoreOrLess() {
    this.expandtoggle.planned.status = (this.expandtoggle.planned.status === 'open') ? 'closed' : 'open';
  }


}
