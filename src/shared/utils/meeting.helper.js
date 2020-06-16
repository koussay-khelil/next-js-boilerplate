import { decodeToken } from './decode-header';

export const iAmTheSenderInCalendar = sentMeeting => {
  if (
    sentMeeting.isMeeting &&
    !sentMeeting.accepted &&
    // eslint-disable-next-line no-underscore-dangle
    decodeToken().user._id !== sentMeeting.user
  ) {
    return false;
  }
  return true;
};

export const iAmTheSenderInDrawer = meeting => {
  if (
    // eslint-disable-next-line no-underscore-dangle
    decodeToken().user._id !== meeting.propertyDetails._id
  ) {
    return false;
  }
  return true;
};
