var moment = require('moment-timezone');

const formatDate = (unixTime: number) => {
  return moment.tz(unixTime, "America/Los_Angeles").format('MMM DD, YYYY, hh:mm A');
};

export default formatDate;