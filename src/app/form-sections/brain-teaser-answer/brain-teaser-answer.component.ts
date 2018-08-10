import { Component,  Input } from '@angular/core';
import { FormControl,  FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';
import { TeamphotoBirthdayComponent } from '../teamphoto-birthday/teamphoto-birthday.component';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-brain-teaser-answer',
  templateUrl: './brain-teaser-answer.component.html',
  styleUrls: ['./brain-teaser-answer.component.css']
})
export class BrainTeaserAnswerComponent {
  @Input() completedSections: any;
  @Input() showorhide: string;
  @Input() expandtoggle: any;
  @Input() teamphotobirthday: TeamphotoBirthdayComponent;

  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3001/upload' });

  userFormuserbrainteaserans = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  constructor(private progressBarService: ProgressBarService, private route: Router) { }


  get users(): FormArray {
    return this.userFormuserbrainteaserans.get('users') as FormArray;
  }

  showActive() {
    this.completedSections.brainteaseranswer.status = 'active';
    this.route.navigateByUrl('brainteserans');
  }

  onFormSubmit() {
    this.completedSections.brainteaseranswer.status = 'completed';
    this.progressBarService.addItemInList(['brainteaserans', this.userFormuserbrainteaserans.value]);
    this.progressBarService.additem('brainteaserans', this.users.value);

    this.showorhide = 'hide';
    this.teamphotobirthday.toggle('show');

  }
  addMoreInputBox() {
    this.users.push(new FormControl());
  }
  toggle(showorhide: string) {
    this.showorhide = showorhide;
  }
  expandMoreOrLess() {
    this.expandtoggle.brainteaseranssection.status = (this.expandtoggle.brainteaseranssection.status === 'open') ? 'closed' : 'open';
  }

  backgroundImageUpload() {
    this.uploader.uploadAll();
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);

  }

  onSuccessItem(item: any, response: string, status: number, headers: any): any {
    const data = JSON.parse(response); // success server response
    this.progressBarService.addBackgroundImage('brainteaserans', data.path );
    console.log(data);
  }

  onErrorItem(item: any, response: string, status: number, headers: any): any {
    const error = JSON.parse(response); // error server response
    console.log(error);
  }

}
