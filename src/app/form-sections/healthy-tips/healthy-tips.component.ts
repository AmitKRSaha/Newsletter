import { Component,  Input } from '@angular/core';
import { FormControl,  FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';
import { BrainTeaserAnswerComponent } from '../brain-teaser-answer/brain-teaser-answer.component';

@Component({
  selector: 'app-healthy-tips',
  templateUrl: './healthy-tips.component.html',
  styleUrls: ['./healthy-tips.component.css']
})
export class HealthyTipsComponent {
  @Input() brainteaseranswer: BrainTeaserAnswerComponent;
  @Input() completedSections: any;
  @Input() showorhide: string;
  @Input() expandtoggle: any;
  @Input() line: any;


  userFormuserhealthytips = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  constructor(private progressBarService: ProgressBarService) { }


  get users(): FormArray {
    return this.userFormuserhealthytips.get('users') as FormArray;
  }

  showActive() {
    this.completedSections.healthcare.status = 'active';
    this.line.healthtips.status = 'active';
  }

  onFormSubmit() {
    this.completedSections.healthcare.status = 'completed';
    this.line.healthtips.status = 'completed';
    this.progressBarService.additem('healthtips', this.users.value);

    this.showorhide = 'hide';
    this.brainteaseranswer.toggle('show');
  }
  addMoreInputBox() {
    this.users.push(new FormControl());
  }

  toggle(showorhide: string) {
    this.showorhide = showorhide;
  }

  expandMoreOrLess() {
    this.expandtoggle.healthsection.status = (this.expandtoggle.healthsection.status === 'open') ? 'closed' : 'open';
  }
}
