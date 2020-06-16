/**
 *
 * C
 *
 */

import React from 'react';

// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import messages from './messages';

import styles from './c.module.scss';

const C = () => (
  <div className={styles.c}>
    <Helmet>
      <title>C</title>
      <meta name="description" content="Description of C" />
    </Helmet>
    <FormattedMessage {...messages.header} />
  </div>
);

C.propTypes = {};

export default C;
