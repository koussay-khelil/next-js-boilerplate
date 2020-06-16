/**
 *
 * B
 *
 */

import React from 'react';

// import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';

import messages from './messages';

import styles from './b.module.scss';

const B = () => (
  <div className={styles.b}>
    <Helmet>
      <title>B</title>
      <meta name="description" content="Description of B" />
    </Helmet>
    <FormattedMessage {...messages.header} />
  </div>
);

B.propTypes = {};

export default B;
