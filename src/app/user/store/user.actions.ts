import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/models/user';

export const SET_USER = '[Users Page] set user';

export const SetUser = createAction(
    SET_USER,
    props<{ user: IUser }>()
);
