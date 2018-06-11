import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { BusinessUpdateComponent } from '../business-update/business-update.component';
import { ProgressBarService } from '../../progress-bar.service';

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
          , private changeDetectorRef: ChangeDetectorRef,
           private route: Router) { }

  userFormuserOpportunity = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });
  fileChange(input) {
    this.readFiles(input.files);
  }
  readFile(file, reader, callback) {
    reader.onload = () => {
      callback(reader.result);
      // console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }
  readFiles(files, index = 0) {
    // Create the file reader
    const reader = new FileReader();
    // If there is a file
    if (index in files) {
      // Start reading this file
      this.readFile(files[index], reader, (result) => {
        // Create an img element and add the image file data to it
        const img = document.createElement('img');
        img.src = result;
        // Send this img to the resize function (and wait for callback)
        this.resize(img, 250, 250, (resized_jpeg, before, after) => {
          // For debugging (size in bytes before and after)
          this.debug_size_before.push(before);
          this.debug_size_after.push(after);
          // Add the resized jpeg img source to a list for preview
          // This is also the file you want to upload. (either as a
          // base64 string or img.src = resized_jpeg if you prefer a file).
          this.file_srcs.push(resized_jpeg);
          this.imgpath =  resized_jpeg;
          // this.progressbarservice.addItemInList(['sectionhead', resized_jpeg]);
          // Read the next file;
          this.readFiles(files, index + 1);
        });
      });
    } else {
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }
  resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
    // This will wait until the img is loaded before calling this function
    return img.onload = () => {
      // Get the images current width and height
      let width = img.width;
      let height = img.height;
      // Set the WxH to fit the Max values (but maintain proportions)
      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      // create a canvas object
      const canvas = document.createElement('canvas');
      // Set the canvas to the new calculated dimensions
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      // Get this encoded as a jpeg
      // IMPORTANT: 'jpeg' NOT 'jpg'
      const dataUrl = canvas.toDataURL('image/jpeg');
      // callback with the results
      callback(dataUrl, img.src.length, dataUrl.length);
    };
  }

  showactivestatus() {
    this.completedSections.sectionHead.status = 'active';
    this.line.sectionHead.status = 'active';
    this.route.navigateByUrl('header');
  }

  onFormSubmit() {
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
