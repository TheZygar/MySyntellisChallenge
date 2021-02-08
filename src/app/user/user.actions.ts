import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { IUser } from 'src/app/models/user';

export const selectUser = createAction('[Users Page] Select User', props<{ userId: number }>());
export const loadUsers = createAction('[User/API] Load Users', props<{ users: IUser[] }>());