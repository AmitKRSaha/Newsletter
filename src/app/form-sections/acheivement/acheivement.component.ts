import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';
import { PlannedComponent } from '../planned/planned.component';

@Component({
  selector: 'app-acheivement',
  templateUrl: './acheivement.component.html',
  styleUrls: ['./acheivement.component.css']
})
export class AcheivementComponent {
  @Input() planned: PlannedComponent;
  @Input() line: any;
  @Input() completedSections: any;
  @Input() showorhide: string;
  @Input() expandtoggle: any;



  userFormuseracheivement = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  constructor(private progressBarService: ProgressBarService) { }


  get users(): FormArray {
    return this.userFormuseracheivement.get('users') as FormArray;
  }

  showActive() {
    this.completedSections.acheivement.status = 'active';
    this.line.acheivement.status = 'active';
  }

  onFormSubmit() {
    this.completedSections.acheivement.status = 'completed';
    this.line.acheivement.status = 'completed';
    this.progressBarService.addItemInList(['opportunitysection', this.userFormuseracheivement.value]);
    this.showorhide = 'hide';
    this.planned.toggle('show');
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
