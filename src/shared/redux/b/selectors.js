import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the b state domain
 */

const selectBDomain = state => state.b || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by B
 */

const makeSelectB = () =>
  createSelector(selectBDomain, substate => substate);

export default makeSelectB;
export { selectBDomain };
