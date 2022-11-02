import { createFeatureSelector, createSelector } from '@ngrx/store'
import { commonFeature, CommonState } from '../common.state'

export const selectCommonState = createFeatureSelector<CommonState>(commonFeature);

export class CommonSelectors {
    private state = selectCommonState;

    public token = createSelector(this.state, state => state.token);
}

export const commonSelectors = new CommonSelectors();