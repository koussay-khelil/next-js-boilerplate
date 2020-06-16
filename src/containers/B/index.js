/**
 *
 * B
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/inject-saga';
import { DAEMON } from 'utils/constants';
import { useInjectReducer } from 'utils/inject-reducer';
import makeSelectB from '../../shared/redux/b/selectors';
import reducer from '../../shared/redux/b/reducer';

import actions from '../../shared/redux/b/actions';

import saga from '../../shared/redux/b/saga';

import B from './B';

const BIndex = props => {
  useInjectReducer({ key: 'b', reducer });

  return <B {...props} />;
};

const mapStateToProps = createStructuredSelector({
  b: makeSelectB(),
});

const mapDispatchToProps = {
  ...actions,
};

const withSaga = injectSaga({ key: 'b', saga, mode: DAEMON });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo, withSaga)(BIndex);
