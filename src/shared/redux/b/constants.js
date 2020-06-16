/*
 *
 * B constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/B/'

export default {
  defaultAction: generateActionTypes(root, 'DEFAULT_ACTION'),
};
