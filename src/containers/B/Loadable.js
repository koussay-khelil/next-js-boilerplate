/**
 *
 * Asynchronously loads the component for B
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
