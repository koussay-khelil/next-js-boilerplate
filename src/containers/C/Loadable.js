/**
 *
 * Asynchronously loads the component for C
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
