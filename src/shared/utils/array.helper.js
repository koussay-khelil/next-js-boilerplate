import moment from 'moment';
import {
  iAmTheSenderInCalendar
} from './meeting.helper';

export const formCalendarArray = data => {
  const finalMeetings = data.meetings.reduce((acc, current) => {
    acc = acc.concat(
      current.dates.map(el => {
        const startDate = new Date(el.date);
        const endDate = new Date(el.date).setHours(startDate.getHours() + 1);
        return {
          accepted: el.accepted,
          refused: el.refused,
          reported: el.reported,
          date: el.date,
          start: startDate,
          end: new Date(endDate),
          type: el.type,
          proposedBy: el.proposedBy,

          title: 1,
          isMeeting: true,
          id: current._id,
          user: current.buyer,
        };
      }),
    );

    return acc;
  }, []);

  const finalAvailabilities = data.availabilities.map(el => ({
    id: el._id,
    start: new Date(el.start),
    end: new Date(el.end),
    title: 0,
    isMeeting: false,
  }));

  return [
    ...finalMeetings,
    // ...finalMeetings.filter(el => !el.refused && !el.reported),
    ...finalAvailabilities,
  ];
};

export const language = {
  allDay: 'Journée',
  previous: '<',
  today: "Aujourd'hui",
  next: '>',
  month: 'Mois',
  week: 'Semaine',
  day: 'Jour',
  agenda: 'Agenda',
  date: 'Date',
  time: 'heure',
  event: 'événement',
  showMore: total => `+ ${total} événement(s) supplémentaire(s)`,
};

export const getOnlyAvailabilitiesFromCalendar = data =>
  data.reduce((acc, current) => {
    if (!current.isMeeting) {
      // eslint-disable-next-line no-param-reassign
      acc = acc.concat({
        start: current.start,
        end: current.end,
      });
    }
    return acc;
  }, []);

export const checkIfDayContainAvailabilities = (date, data) => {
  const availabilities = getOnlyAvailabilitiesFromCalendar(data);
  return !!availabilities.some(availability =>
    moment(availability.start).isSame(moment(date), 'day'),
  );
};

export const createFakeArray = (length, fakeObject = {}) =>
  Array.from({
    length
  }, () => fakeObject);

export const getUpcomingMeetingsPerDate = meetings =>
  meetings.reduce((acc, curr) => {
    const tempData = {
      ...acc
    };
    curr.dates.map(el => {
      if (el.accepted &&
        moment(el.date).isAfter()
      ) {
        if (tempData[moment(el.date).format('YYYY-MM-DD')]) {
          tempData[moment(el.date).format('YYYY-MM-DD')] = tempData[
            moment(el.date).format('YYYY-MM-DD')
          ].concat({
            ...el,
            id: curr._id,
            propertyDetails: curr.property
          });
        } else
          tempData[moment(el.date).format('YYYY-MM-DD')] = [{
            ...el,
            id: curr._id,
            propertyDetails: curr.property
          }, ];
      }
    });
    return tempData;
  }, {});

export const getmeetingsToValidatePerDate = meetings =>
  meetings.reduce((acc, curr) => {
    const tempData = {
      ...acc
    };
    curr.dates.map(el => {
      if (
        !el.accepted &&
        !el.refused &&
        !el.reported &&
        moment(el.date).isAfter()
      ) {
        if (tempData[moment(el.date).format('YYYY-MM-DD')]) {
          tempData[moment(el.date).format('YYYY-MM-DD')] = tempData[
            moment(el.date).format('YYYY-MM-DD')
          ].concat({
            ...el,
            id: curr._id,
            buyer: curr.buyer,
            propertyDetails: curr.property,
            isSender: !iAmTheSenderInCalendar(el),
          });
        } else
          tempData[moment(el.date).format('YYYY-MM-DD')] = [{
            ...el,
            id: curr._id,
            buyer: curr.buyer,
            propertyDetails: curr.property,
            isSender: !iAmTheSenderInCalendar(el),
          }, ];
      }
    });
    return tempData;
  }, {});
export const oneRowItemSkeleton = (loading, active = true) => ({
  active,
  title: {
    rows: 1,
    width: '70%'
  },
  paragraph: {
    rows: 8,
    width: '40%'
  },
  loading,
});

export const getOldMeetingsPerDate = visitedProperties =>
  visitedProperties.reduce((acc, curr) => {
    const tempData = {
      ...acc
    };
    curr.dates.map(el => {
      if (el.accepted && moment(el.date).isBefore(Date.now())) {
        if (tempData[moment(el.date).format('YYYY-MM-DD')]) {
          tempData[moment(el.date).format('YYYY-MM-DD')] = tempData[
            moment(el.date).format('YYYY-MM-DD')
          ].concat({
            ...el,
            id: curr._id,
            propertyDetails: curr.property
          });
        } else
          tempData[moment(el.date).format('YYYY-MM-DD')] = [{
            ...el,
            id: curr._id,
            propertyDetails: curr.property
          }, ];
      }
    });
    return tempData;
  }, {});

export const getOldMeetingsNotYetAcceptedPerDate = visitedProperties =>
  visitedProperties.reduce((acc, curr) => {
    const tempData = {
      ...acc
    };
    curr.dates.map(el => {
      if (!el.accepted &&
        !el.refused &&
        !el.reported &&
        moment(el.date).isBefore(Date.now())
      ) {
        if (tempData[moment(el.date).format('YYYY-MM-DD')]) {
          tempData[moment(el.date).format('YYYY-MM-DD')] = tempData[
            moment(el.date).format('YYYY-MM-DD')
          ].concat({
            ...el,
            id: curr._id,
            propertyDetails: curr.property
          });
        } else
          tempData[moment(el.date).format('YYYY-MM-DD')] = [{
            ...el,
            id: curr._id,
            propertyDetails: curr.property
          }, ];
      }
    });
    return tempData;
  }, {});

export const getOldMeetingsRetakenPerDate = visitedProperties =>
  visitedProperties.reduce((acc, curr) => {
    const tempData = {
      ...acc
    };
    curr.dates.map(el => {
      if (el.reported &&
        moment(el.date).isBefore(Date.now())
      ) {
        if (tempData[moment(el.date).format('YYYY-MM-DD')]) {
          tempData[moment(el.date).format('YYYY-MM-DD')] = tempData[
            moment(el.date).format('YYYY-MM-DD')
          ].concat({
            ...el,
            id: curr._id,
            propertyDetails: curr.property
          });
        } else
          tempData[moment(el.date).format('YYYY-MM-DD')] = [{
            ...el,
            id: curr._id,
            propertyDetails: curr.property
          }, ];
      }
    });
    return tempData;
  }, {});
