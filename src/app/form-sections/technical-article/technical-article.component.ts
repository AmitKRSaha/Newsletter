import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';
import { BrainTeasersComponent } from '../brain-teasers/brain-teasers.component';

@Component({
  selector: 'app-technical-article',
  templateUrl: './technical-article.component.html',
  styleUrls: ['./technical-article.component.css']
})
export class TechnicalArticleComponent implements OnInit {
  technicalarticleshoworhide: any = '';
  @Input() brainteaser: BrainTeasersComponent;
  @Input() completedSections: any;
  @Input() expandtoggle: any;
  @Input() line: any;
  @Input() technicalstat: any;



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

  showActive() {
    this.completedSections.tech.status = 'active';
    this.line.tech.status = 'active';
  }

  onFormSubmit() {
    this.completedSections.tech.status = 'completed';
    this.line.tech.status = 'completed';
    this.progressBarService.addItemInList(['technicalsection', this.userFormuserProjstat.value]);
    this.technicalarticleshoworhide = 'hide';
    this.brainteaser.toggle('show');
  }
  addMoreInputBox() {
    this.users.push(new FormControl());
  }
  toggletecharticle(showorhide: string) {
    this.technicalarticleshoworhide = showorhide;
  }

  expandMoreOrLess() {
    this.expandtoggle.technicalsection.status = (this.expandtoggle.technicalsection.status === 'open') ? 'closed' : 'open';
  }
}
