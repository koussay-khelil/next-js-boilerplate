/*
 *
 * Form constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/Form/';

export default {
  defaultAction: generateActionTypes(root, 'DEFAULT_ACTION'),
};
