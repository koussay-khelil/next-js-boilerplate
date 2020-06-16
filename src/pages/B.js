import React from 'react';
import PropTypes from 'prop-types';

import B from '../containers/B';
import { withTranslation } from 'utils/with-i18next';

export class BPage extends React.PureComponent {
  render() {
    return <B />;
  }
}

BPage.propTypes = {};

BPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(BPage);
