import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl,  FormGroup, FormArray } from '@angular/forms';
import { ProgressBarService } from '../../progress-bar.service';
import { ImageProcessService } from '../../utility-section/image-process.service';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

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
  teamImage: string[] = [];
  birthdayImage: string[] = [];
  anniversaryImage: string[] = [];

  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3001/upload'});

  userFormuserteam = new FormGroup({
    users: new FormArray([
      new FormControl()
    ])
  });


  constructor(private progressBarService: ProgressBarService
    , private imageprocessor: ImageProcessService
    , private changeDetectorRef: ChangeDetectorRef
    , private route: Router) { }

  ngOnInit() {
  }

  teamphoto(input) {
    this.readFiles(input.files, 'team');
  }

  birthdayphoto(inputbirth) {
    this.readFiles(inputbirth.files, 'birthday');
    // for (let file of inputbirth.files) {
    //   this.readFiles(file, 'birthday');
    // }
    // console.log(input1);
    // this.readFiles(input1.files, 'birthday');
  }

  anniversaryphoto(input2) {
    this.readFiles(input2.files, 'anniversary');
  }

  readFiles(files, label, index = 0) {

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
          if (label === 'team') {
            this.teamImage.push(resized_jpeg);
            // console.log(this.teamImage);
          }
          if (label === 'birthday') {
            this.birthdayImage.push(resized_jpeg);
            // console.log(this.birthdayImage);
          }
          if (label === 'anniversary') {
            this.anniversaryImage.push(resized_jpeg);
            // console.log(this.anniversaryImage);
          }

          // this.progressbarservice.addItemInList(['sectionhead', resized_jpeg]);
          // Read the next file;
          this.readFiles(files, label, index + 1);
        });
      });
    } else {
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }

  get users(): FormArray {
    return this.userFormuserteam.get('users') as FormArray;
  }

  onFormSubmit() {
    this.completedSections.teamandbirthday.status = 'completed';
    this.line.teamandbirthday.status = 'completed';
    this.uploader.uploadAll();
    this.uploader.onErrorItem = (item, response, status, headers) => this.onErrorItem(item, response, status, headers);
    this.uploader.onSuccessItem = (item, response, status, headers) => this.onSuccessItem(item, response, status, headers);
    // this.progressBarService.addItemInList([this.teamImage, this.birthdayImage, this.anniversaryImage]);
    this.showorhide = 'hide';
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
    this.route.navigateByUrl('teamimage');
  }
  expandMoreOrLess() {
    this.expandtoggle.teamandbirthday.status = (this.expandtoggle.teamandbirthday.status === 'open') ? 'closed' : 'open';
  }

  onSuccessItem(item: any, response: string, status: number, headers: any): any {
    const data = JSON.parse(response); // success server response
    this.progressBarService.addItemInList([ data.path, this.birthdayImage, this.anniversaryImage]);
  this.progressBarService.additem('teamimage', [ data.path, this.birthdayImage, this.anniversaryImage]);

    console.log(data);
}

onErrorItem(item: any, response: string, status: number, headers: any): any {
    const error = JSON.parse(response); // error server response
    console.log(error);
}

}
