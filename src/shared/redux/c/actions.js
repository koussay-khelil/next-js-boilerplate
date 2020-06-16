/*
 *
 * C actions
 *
 */
import constants from './constants'

import {
  generateEmptyAction,
} from '../../utils/generic-saga'

export default {
    defaultAction: generateEmptyAction(constants.defaultAction.request),
}
