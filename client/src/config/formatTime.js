const moment = require('moment');

function minutes(duration) {
  return format(duration.minutes());
}

function seconds(duration) {
  return format(duration.seconds());
}

function milliseconds(duration) {
  return format(duration.milliseconds());
}

function format(duration) {
  if (!duration) {
    return '00';
  } else if (('' + duration).length == 1) {
    return '0' + duration;
  } else if (('' + duration).length == 3) {
    return ('' + duration).slice(0, 2);
  } else {
    return duration;
  }
}

function convert(length) {
  if (!length) {
    return '00:00';
  }

  const duration = moment.duration(length);
  const formattedDuration = `${minutes(duration)}:${seconds(duration)}`;
  // formattedDuration += milliseconds(duration);

  return formattedDuration;
}

module.exports = convert;

// console.log(
//   'time card:',
//   moment(end.diff(startTime)).format('m[m] s[s]')
// );
