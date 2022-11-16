import { createActionGroup, props } from '@ngrx/store';

export const CommonActions = createActionGroup({
  source: 'common',
  events: {
    'get token': props<{ payload: { login: string; password: string } }>(),
    'get token success': props<{ payload: { token: string } }>(),
    'get token error': props<{ payload: { error: string } }>(),
  },
});
