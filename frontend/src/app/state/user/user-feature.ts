import { createFeature, createReducer, on } from '@ngrx/store';
import { User } from '../models';
import { UserActions } from './actions';

const initialState: User = {
  sub: 'Chuck',
};

export const UserFeature = createFeature({
  name: 'User Feature',
  reducer: createReducer(
    initialState,
    on(UserActions.userLoaded, (currentState, action) => action.payload)
  ),
});
