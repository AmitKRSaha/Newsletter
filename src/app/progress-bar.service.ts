import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  content: Array<any> = new Array<any>();
  constructor() { }

  addItemInList(items)  {
    this.content.push(items);
    console.log(this.content);
  }
}
