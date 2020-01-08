export const getReadableTime = timeUnit =>
  timeUnit < 10 ? `0${timeUnit}` : timeUnit;

export const getMonth = month => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return months[month];
};

export const getDay = day => {
  const daysSuffixExceptions = [
    { day: "1st", exceptionNumber: 1 },
    { day: "2nd", exceptionNumber: 2 },
    { day: "3rd", exceptionNumber: 3 },
    { day: "21st", exceptionNumber: 21 },
    { day: "22nd", exceptionNumber: 22 },
    { day: "23rd", exceptionNumber: 23 },
    { day: "31st", exceptionNumber: 31 }
  ];

  const daySuffixException = daysSuffixExceptions.find(
    suffixException => day === suffixException.exceptionNumber
  );

  return daySuffixException ? daySuffixException.day : `${day}th`;
};

const getReadableTimeStamp = timeStamp => {
  const month = getMonth(timeStamp.getMonth());
  const day = getDay(timeStamp.getDate());
  const year = timeStamp.getFullYear();
  const hour = getReadableTime(timeStamp.getHours());

  const minutes = getReadableTime(timeStamp.getMinutes());

  const seconds = getReadableTime(timeStamp.getSeconds());

  const time = `${hour}:${minutes}:${seconds}`;

  return `${day} ${month} ${year} ${time}`;
};

export default getReadableTimeStamp;
