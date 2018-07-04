import { Action } from '@ngrx/store';

export enum NewsLetterActionTypes {
  CreateHeaderImage = '[Header] Add Image',
  UpdateHeaderImage = '[Header] Update Image',

}

export class CreateHeaderImage implements Action {
  readonly type = NewsLetterActionTypes.CreateHeaderImage;

  constructor(public payload: any) { }
}


export class UpdateHeaderImage implements Action {
  readonly type = NewsLetterActionTypes.UpdateHeaderImage;

  constructor(public payload: any) { }
}


export type NewsLetterActions = CreateHeaderImage
  | UpdateHeaderImage;

