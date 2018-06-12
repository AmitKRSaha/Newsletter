import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brain-teaser-answer',
  templateUrl: './brain-teaser-answer.component.html',
  styleUrls: ['./brain-teaser-answer.component.css']
})
export class BrainTeaserAnswerComponent {
  @Input() completedSections: any;
  @Input() showorhide: string;
  @Input() expandtoggle: any;



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
    this.progressBarService.addItemInList(['opportunitysection', this.userFormuserbrainteaserans.value]);
    this.showorhide = 'hide';

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

}
