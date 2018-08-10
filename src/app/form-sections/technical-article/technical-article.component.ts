import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { ProgressBarService } from '../../progress-bar.service';
import { BrainTeasersComponent } from '../brain-teasers/brain-teasers.component';
import { FileUploader } from 'ng2-file-upload';

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

  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3001/upload' });

  userFormuserProjstat = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });

  constructor(private progressBarService: ProgressBarService, private route: Router) { }

  ngOnInit() {
  }

  get users(): FormArray {
    return this.userFormuserProjstat.get('users') as FormArray;
  }

  showActive() {
    this.completedSections.tech.status = 'active';
    this.line.tech.status = 'active';
    this.route.navigateByUrl('technical');
  }

  onFormSubmit() {
    this.completedSections.tech.status = 'completed';
    this.line.tech.status = 'completed';
    this.progressBarService.addItemInList(['technicalsection', this.userFormuserProjstat.value]);
    this.progressBarService.additem('technicalsection', this.users.value);

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

  backgroundImageUpload() {
    this.uploader.uploadAll();
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);

  }

  onSuccessItem(item: any, response: string, status: number, headers: any): any {
    const data = JSON.parse(response); // success server response
    this.progressBarService.addBackgroundImage({ 'technical': data.path });
    console.log(data);
  }

  onErrorItem(item: any, response: string, status: number, headers: any): any {
    const error = JSON.parse(response); // error server response
    console.log(error);
  }
}
