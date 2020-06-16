/**
 *
 * Form
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import injectSaga from 'utils/inject-saga';
import { DAEMON } from 'utils/constants';
import { useInjectReducer } from 'utils/inject-reducer';
import makeSelectForm from '../../shared/redux/form/selectors';
import reducer from '../../shared/redux/form/reducer';

import actions from '../../shared/redux/form/actions';

import saga from '../../shared/redux/form/saga';

import Form from './Form';

const FormIndex = props => {
  useInjectReducer({ key: 'form', reducer });

  return <Form {...props} />;
};

const mapStateToProps = createStructuredSelector({
  form: makeSelectForm(),
});

const mapDispatchToProps = {
  ...actions,
};

const withSaga = injectSaga({ key: 'form', saga, mode: DAEMON });

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo, withSaga)(FormIndex);
