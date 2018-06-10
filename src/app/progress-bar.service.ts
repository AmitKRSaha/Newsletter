import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  content: string[] = [];
  constructor() { }



  addItemInList(items)  {
    this.content.push(items);
    console.log(this.content);
  }

  getItemFromList(): Observable<any> {
    return from(this.content);
  }
}
