import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { IUser } from 'src/app/models/user';
import * as UserActions from './user.actions';
 
export interface State extends EntityState<IUser> {
  selectedUserId: number | null;
}
 
export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();
 
export const initialState: State = adapter.getInitialState({
  selectedUserId: null,
});
 
export const userReducer = createReducer(
  initialState,
  on(UserActions.selectUser, (state, { userId }) => {
    return { ...state, selectedUserId: userId };
  }),
  on(UserActions.loadUsers, (state, { users }) => {
    return adapter.addMany(users, { ...state, selectedUserId: null });
  })
);
 
export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}