import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgressBarService } from '../../progress-bar.service';
import { ProjectStatisticsComponent } from '../project-statistics/project-statistics.component';
import { FileUploader } from 'ng2-file-upload';

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

  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3001/upload' });

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

    this.progressBarService.additem('planned', this.users.value);

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

  backgroundImageUpload() {
    this.uploader.uploadAll();
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);

  }

  onSuccessItem(item: any, response: string, status: number, headers: any): any {
    const data = JSON.parse(response); // success server response
    this.progressBarService.addBackgroundImage('planned', data.path );
    console.log(data);
  }

  onErrorItem(item: any, response: string, status: number, headers: any): any {
    const error = JSON.parse(response); // error server response
    console.log(error);
  }
}
