import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';
import { HealthyTipsComponent } from '../healthy-tips/healthy-tips.component';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-brain-teasers',
  templateUrl: './brain-teasers.component.html',
  styleUrls: ['./brain-teasers.component.css']
})
export class BrainTeasersComponent {
  @Input() healthytips: HealthyTipsComponent;
  @Input() completedSections: any;
  @Input() showorhide: string;
  @Input() expandtoggle: any;
  @Input() line: any;

  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3001/upload' });

  userFormuserbrainteaser = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  constructor(private progressBarService: ProgressBarService, private route: Router) { }


  get users(): FormArray {
    return this.userFormuserbrainteaser.get('users') as FormArray;
  }

  showActive() {
    this.completedSections.brainteaser.status = 'active';
    this.line.brainteaser.status = 'active';
    this.route.navigateByUrl('brainteaserAndHealthtips');

  }

  onFormSubmit() {
    this.completedSections.brainteaser.status = 'completed';
    this.line.brainteaser.status = 'completed';
    this.progressBarService.addItemInList(['brainteaser', this.userFormuserbrainteaser.value]);
    this.showorhide = 'hide';
    this.healthytips.toggle('show');

  }
  addMoreInputBox() {
    this.users.push(new FormControl());
  }

  toggle(showorhide: string) {
    this.showorhide = showorhide;
  }

  expandMoreOrLess() {
    this.expandtoggle.brainteasersection.status = (this.expandtoggle.brainteasersection.status === 'open') ? 'closed' : 'open';
  }

  backgroundImageUpload() {
    this.uploader.uploadAll();
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);

  }

  onSuccessItem(item: any, response: string, status: number, headers: any): any {
    const data = JSON.parse(response); // success server response
    this.progressBarService.addBackgroundImage({ 'brainandhealth': data.path });
    console.log(data);
  }

  onErrorItem(item: any, response: string, status: number, headers: any): any {
    const error = JSON.parse(response); // error server response
    console.log(error);
  }

}
