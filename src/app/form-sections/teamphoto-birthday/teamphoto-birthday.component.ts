import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';

@Component({
  selector: 'app-teamphoto-birthday',
  templateUrl: './teamphoto-birthday.component.html',
  styleUrls: ['./teamphoto-birthday.component.css']
})
export class TeamphotoBirthdayComponent implements OnInit {
  @Input() completedSections: any;
  @Input() expandtoggle: any;
  @Input() line: any;
  @Input() showorhide: string;

  userFormuserteam = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  constructor(private progressBarService: ProgressBarService) { }

  ngOnInit() {
  }

  get users(): FormArray {
    return this.userFormuserteam.get('users') as FormArray;
  }

  onFormSubmit() {
    this.completedSections.teamandbirthday.status = 'completed';
    this.line.teamandbirthday.status = 'completed';
    // this.progressBarService.addItemInList(['opportunitysection', this.userFormuserProjstat.value]);
    // this.projectstatshoworhide = 'hide';
  }
  addMoreInputBox() {
    this.users.push(new FormControl());
  }
  toggle(showorhide: string) {
    this.showorhide = showorhide;
  }
  showActive() {
    this.completedSections.teamandbirthday.status = 'active';
    this.line.teamandbirthday.status = 'active';
  }
  expandMoreOrLess() {
    this.expandtoggle.teamandbirthday.status = (this.expandtoggle.teamandbirthday.status === 'open') ? 'closed' : 'open';
  }

}
