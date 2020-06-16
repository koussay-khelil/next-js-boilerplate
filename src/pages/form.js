import React from 'react';
import PropTypes from 'prop-types';

import Form from '../containers/Form';
import { withTranslation } from 'utils/with-i18next';

export class FormPage extends React.PureComponent {
  render() {
    const { t } = this.props;

    return <Form t={t} />;
  }
}

FormPage.propTypes = {
  t: PropTypes.func,
};

FormPage.getInitialProps = async () => ({
  namespacesRequired: ['common', 'banner', 'features'],
});

export default withTranslation('common')(FormPage);
