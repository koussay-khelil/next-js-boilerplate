import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'utils/with-i18next';
import Spiner from 'components/Spiner';
import styles from './a.module.scss';

export function Showcases(props) {
  const { data, onGetShowcases, t } = props;

  const { loading, fetched, showcases } = data;

  const renderCases = () => {
    if (loading) {
      return <Spiner />;
    }

    if (fetched) {
      return (
        <div className={styles.showcasesRow}>
          {showcases.map(item => (
            <div className={styles.showcasesItem} key={item.link}>
              <img className={styles.image} src={item.src} alt={item.title} />

              <h3 className={styles.title}>{item.title}</h3>

              <a className={styles.link} href={item.link} target="_blank">
                {item.link}
              </a>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={styles.container} id="exampleGetApi">
      <button className={styles.btn} onClick={onGetShowcases}>
        {t('phrases.getShowcases')}
      </button>

      {renderCases()}
    </div>
  );
}

Showcases.propTypes = {
  t: PropTypes.func,
  data: PropTypes.object,
  onGetShowcases: PropTypes.func,
};

export default withTranslation('common')(Showcases);
