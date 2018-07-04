import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { ProgressBarService } from '../../app/progress-bar.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as newsletterActions from './newsletter.actions';

@Injectable()
export class ProductEffects {

  constructor(private progressBarService: ProgressBarService,
              private actions$: Actions) { }



  // @Effect()
  // createProduct$: Observable<Action> = this.actions$.pipe(this.progressBarService())
}
