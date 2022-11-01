export const commonFeature = 'common-feature';

export interface CommonState {
    token: string
    error: string
}

export const commonInitialState: CommonState = {
    token: localStorage.getItem('token') || '',
    error: ''
}