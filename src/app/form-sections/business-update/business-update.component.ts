import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { OpportunityPipelineComponent } from '../opportunity-pipeline/opportunity-pipeline.component';
import { ProgressBarService } from '../../progress-bar.service';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-business-update',
  templateUrl: './business-update.component.html',
  styleUrls: ['./business-update.component.css']
})
export class BusinessUpdateComponent implements OnInit {

  @Input() opportunityPipeline: OpportunityPipelineComponent;
  @Input() completedSections: any;
  @Input() expandtoggle: any;
  @Input() line: any;
  @Input() routeactivate: any;
  businessShowOrHide: any = 'hide';
  showorhide: any = 'show';
  path = '';
  // public file_srcs: string[] = [];
  // public debug_size_before: string[] = [];
  // public debug_size_after: string[] = [];
  // imgpath: string;

  constructor(private progressBarService: ProgressBarService, private route: Router,
    private changeDetectorRef: ChangeDetectorRef) {

  }

  userFormBusiness = new FormGroup({
    usersBusiness: new FormArray([
      new FormControl()
    ])
  });

  get usersBusiness(): FormArray {
    return this.userFormBusiness.get('usersBusiness') as FormArray;
  }
  addMoreBusinessInputBox() {
    this.usersBusiness.push(new FormControl());
  }
  // deleteMoreInputBox(index: number) {
  //   this.usersBusiness.removeAt(index);
  // }
  onFormSubmit() {
    //  console.log(this.users.value); // Gives FormArray data
    //  console.log(this.userForm.value); // Gives Complete form data
    //  for (let i = 0; i < this.users.length; i++) {
    //    console.log(this.users.at(i).value);
    //  }
    // this.progressBarService.addInProgressBar('sectionhead');
    console.log(JSON.stringify(this.userFormBusiness.value));
    this.progressBarService.addItemInList([this.userFormBusiness.value]);
    this.completedSections.businessupdate.status = 'completed';
    this.line.businessupdate.status = 'completed';
    this.expandtoggle.businessupdate.status = 'closed';
    this.showorhide = '';
    this.opportunityPipeline.toggle('show');
    this.businessShowOrHide = 'hide';
  }

  expandMoreOrLess() {
    this.expandtoggle.businessupdate.status = (this.expandtoggle.businessupdate.status === 'open') ? 'closed' : 'open';
  }

  toggle(showorhide: string) {
    this.businessShowOrHide = showorhide;
  }

  showActive() {
    this.line.businessupdate.status = 'active';
    this.completedSections.businessupdate.status = 'active';
    this.route.navigateByUrl('business');
  }

  ngOnInit() {
  }

  // fileChange(input) {
  //   this.readFiles(input.files);
  // }
  // readFile(file, reader, callback) {
  //   reader.onload = () => {
  //     callback(reader.result);
  //     console.log(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // }
  // readFiles(files, index = 0) {
  //   // Create the file reader
  //   const reader = new FileReader();
  //   // If there is a file
  //   if (index in files) {
  //     // Start reading this file
  //     this.readFile(files[index], reader, (result) => {
  //       // Create an img element and add the image file data to it
  //       const img = document.createElement('img');
  //       img.src = result;
  //       // Send this img to the resize function (and wait for callback)
  //       this.resize(img, 250, 250, (resized_jpeg, before, after) => {
  //         // For debugging (size in bytes before and after)
  //         this.debug_size_before.push(before);
  //         this.debug_size_after.push(after);
  //         // Add the resized jpeg img source to a list for preview
  //         // This is also the file you want to upload. (either as a
  //         // base64 string or img.src = resized_jpeg if you prefer a file).
  //         this.file_srcs.push(resized_jpeg);
  //         this.imgpath = resized_jpeg;
  //         // this.progressbarservice.addItemInList(['sectionhead', resized_jpeg]);
  //         // Read the next file;
  //         this.readFiles(files, index + 1);
  //       });
  //     });
  //   } else {
  //     // When all files are done This forces a change detection
  //     this.changeDetectorRef.detectChanges();
  //   }
  // }
  // resize(img, MAX_WIDTH: number, MAX_HEIGHT: number, callback) {
  //   // This will wait until the img is loaded before calling this function
  //   return img.onload = () => {
  //     // Get the images current width and height
  //     let width = img.width;
  //     let height = img.height;
  //     // Set the WxH to fit the Max values (but maintain proportions)
  //     if (width > height) {
  //       if (width > MAX_WIDTH) {
  //         height *= MAX_WIDTH / width;
  //         width = MAX_WIDTH;
  //       }
  //     } else {
  //       if (height > MAX_HEIGHT) {
  //         width *= MAX_HEIGHT / height;
  //         height = MAX_HEIGHT;
  //       }
  //     }
  //     // create a canvas object
  //     const canvas = document.createElement('canvas');
  //     // Set the canvas to the new calculated dimensions
  //     canvas.width = width;
  //     canvas.height = height;
  //     const ctx = canvas.getContext('2d');
  //     ctx.drawImage(img, 0, 0, width, height);
  //     // Get this encoded as a jpeg
  //     // IMPORTANT: 'jpeg' NOT 'jpg'
  //     const dataUrl = canvas.toDataURL('image/jpeg');
  //     // callback with the results
  //     callback(dataUrl, img.src.length, dataUrl.length);
  //   };
  // }

}
