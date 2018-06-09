import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';
import { HealthyTipsComponent } from '../healthy-tips/healthy-tips.component';

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


  userFormuserbrainteaser = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  constructor(private progressBarService: ProgressBarService) { }


  get users(): FormArray {
    return this.userFormuserbrainteaser.get('users') as FormArray;
  }

  showActive() {
    this.completedSections.brainteaser.status = 'active';
    this.line.brainteaser.status = 'active';
  }

  onFormSubmit() {
    this.completedSections.brainteaser.status = 'completed';
    this.line.brainteaser.status = 'completed';
    this.progressBarService.addItemInList(['opportunitysection', this.userFormuserbrainteaser.value]);
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

}
