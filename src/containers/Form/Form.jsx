/**
 *
 * Form
 *
 */

import React from 'react';

// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import messages from './messages';

import styles from './form.module.scss';

const Form = () => (
  <div className={styles.form}>
    <Helmet>
      <title>Form</title>
      <meta name="description" content="Description of Form" />
    </Helmet>
    <FormattedMessage {...messages.header} />
  </div>
);

Form.propTypes = {};

export default Form;
