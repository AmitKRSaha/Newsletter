import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  content: string[] = [];

  newscontent: Observable<Array<any>>;

  constructor() { }



  addItemInList(items)  {
    this.content.push(items);
    // this.createItemList(items);
     console.log(this.content);
  }

  getItemFromList(): Observable<any> {
    return from(this.content);
  }

  createItemList(items): Observable<any> {
    this.newscontent = new Observable( observer => items );
    console.log('From Obserbale' + this.content);
    return this.newscontent;

  }
}
