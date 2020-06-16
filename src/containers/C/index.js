/**
 *
 * C
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/inject-saga';
import { DAEMON } from 'utils/constants';
import { useInjectReducer } from 'utils/inject-reducer';
import makeSelectC from '../../shared/redux/c/selectors';
import reducer from '../../shared/redux/c/reducer';

import actions from '../../shared/redux/c/actions';

import saga from '../../shared/redux/c/saga';

import C from './C';

const CIndex = props => {
  useInjectReducer({ key: 'c', reducer });

  return <C {...props} />;
};

const mapStateToProps = createStructuredSelector({
  c: makeSelectC(),
});

const mapDispatchToProps = {
  ...actions,
};

const withSaga = injectSaga({ key: 'c', saga, mode: DAEMON });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo, withSaga)(CIndex);
