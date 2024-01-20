import { RouterStateUrl } from './custom-serialize';
import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
export const getRouterState = createFeatureSelector<
  RouterReducerState<RouterStateUrl>
>('router');

export const getCurrentRoute = createSelector(getRouterState, (router) => {
  return router.state;
});