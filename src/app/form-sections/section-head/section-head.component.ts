import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { BusinessUpdateComponent } from '../business-update/business-update.component';
import { ProgressBarService } from '../../progress-bar.service';
import {ImageProcessService} from '../../utility-section/image-process.service';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-section-head',
  templateUrl: './section-head.component.html',
  styleUrls: ['./section-head.component.css']
})
export class SectionHeadComponent {
  @Input() businessupdate: BusinessUpdateComponent;
  @Input() completedSections: any;
  @Input() line: any;
  @Input() expandtoggle: any;
  sectionheadtoggle: any = 'show';
  expandOption: any = true;
  imgpath: string;
  readFils: any;


path = '';
public file_srcs: string[] = [];
public debug_size_before: string[] = [];
 public debug_size_after: string[] = [];

  constructor(private progressbarservice: ProgressBarService
          , private changeDetectorRef: ChangeDetectorRef
          , private imageprocessor: ImageProcessService
          , private store: Store<any>,
           private route: Router) { }

  userFormuserOpportunity = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });
  fileChange(input) {
    this.readFiles(input.files);
  }

  readFiles(files, index = 0) {

    // Create the file reader
    const reader = new FileReader();
    // If there is a file
    if (index in files) {
      // Start reading this file
      this.imageprocessor.readFile(files[index], reader, (result) => {
        // Create an img element and add the image file data to it
        const img = document.createElement('img');
        img.src = result;
        // Send this img to the resize function (and wait for callback)
        this.imageprocessor.resize(img, 250, 250, (resized_jpeg, before, after) => {
          // Add the resized jpeg img source to a list for preview
          // This is also the file you want to upload. (either as a
          // base64 string or img.src = resized_jpeg if you prefer a file).
          this.imgpath =  resized_jpeg;
          // this.progressbarservice.addItemInList(['sectionhead', resized_jpeg]);
          // Read the next file;
          // this.readFiles(files, index + 1);
        });
      });
     } else {
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
     }
  }


  showactivestatus() {
    this.completedSections.sectionHead.status = 'active';
    this.line.sectionHead.status = 'active';
    this.route.navigateByUrl('header');
  }

  onFormSubmit() {
    // For adding to Store
    this.store.dispatch({
      type: 'ADD_TO_THE_STORE',
      payload: this.imgpath
    });
    this.progressbarservice.addItemInList(this.imgpath);
    this.completedSections.sectionHead.status = 'completed';
    this.line.sectionHead.status = 'completed';
    this.sectionheadtoggle = 'hide';
    this.businessupdate.toggle('show');
  }

  expandMoreOrLess() {
    this.expandtoggle.sectionHead.status = (this.expandtoggle.sectionHead.status === 'open') ? 'closed' : 'open';
  }

}
