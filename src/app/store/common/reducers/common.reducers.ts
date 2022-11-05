import { createReducer, on } from '@ngrx/store';
import { CommonActions } from '../actions/common.action';
import { commonInitialState, CommonState } from '../common.state';

export const commonReducers = createReducer(
  commonInitialState,

  on(
    CommonActions.getTokenSuccess,
    (state: CommonState, { payload }): CommonState => ({
      ...state,
      token: payload.token,
      error: '',
    })
  ),

  on(
    CommonActions.getTokenError,
    (state: CommonState, { payload }): CommonState => ({
      ...state,
      token: '',
      error: payload.error,
    })
  )
);
