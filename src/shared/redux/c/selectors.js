import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the c state domain
 */

const selectCDomain = state => state.c || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by C
 */

const makeSelectC = () =>
  createSelector(selectCDomain, substate => substate);

export default makeSelectC;
export { selectCDomain };
