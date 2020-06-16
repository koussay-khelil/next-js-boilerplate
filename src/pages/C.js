import React from 'react';
import PropTypes from 'prop-types';

import C from '../containers/C';
import { withTranslation } from 'utils/with-i18next';

export class CPage extends React.PureComponent {
  render() {
    return <C />;
  }
}

CPage.propTypes = {};

CPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(CPage);
