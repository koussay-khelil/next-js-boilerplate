/*
 *
 * C constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/C/'

export default {
  defaultAction: generateActionTypes(root, 'DEFAULT_ACTION'),
};
