import { Injectable } from '@angular/core';
import { Observable, of, from, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {
  content: string[] = [];
  backgroundImage: string[] = [];
  saveddata = {};

  private _todos: BehaviorSubject<any[]>;

  // Observable string sources
  private contentSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();

  // Observable string streams
  content$ = this.contentSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  // Service message commands
  announceMission(mission: string) {
    this.contentSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

  constructor() {
    this._todos = <BehaviorSubject<any[]>>new BehaviorSubject([]);
  }

  addBackgroundImage(item) {
    this.backgroundImage.push(item);
    // console.log(this.backgroundImage);
  }

  addItemInList(items) {
    this.content.push(items);
    // this.createItemList(items);
    // this.announceMission(items);

  }

  additem(key, value) {
    this.saveddata[key] = value;
    console.log(this.saveddata);
  }

  getItemFromList(): Observable<any> {
    return this._todos.asObservable();
  }

  createItemList(items): Observable<any> {
    this._todos.next(items);
    // console.log('From Obserbale' + this.content);
    return this._todos;

  }
}
