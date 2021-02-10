import { createReducer, on, Action } from '@ngrx/store';
import { IUser } from 'src/app/models/user';
import * as UserActions from './user.actions';
 
export interface UserState {
  user: IUser
}
 
export const initialState: UserState = {
  user: {
    id: 0,
    name: 'temp',
    username: '',
    email: '',
    //address: IAddress;
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    }
  }
}

export const userReducer = createReducer(
  initialState,
  on(UserActions.SetUser, (state, user) => {
    return user;
  })
);
