interface DaysSuffixExceptions {
  [key: string]: { day: string };
}

interface TimeStamp {
  getMonth: () => number;
  getDate: () => number;
  getFullYear: () => number;
  getHours: () => number;
  getMinutes: () => number;
  getSeconds: () => number;
}

export const getReadableTime = (timeUnit: number): string | number =>
  timeUnit < 10 ? `0${timeUnit}` : timeUnit;

export const getMonth = (month: number): string => {
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

export const getDay = (day: number): string => {
  const daysSuffixExceptions: DaysSuffixExceptions = {
    1: { day: "1st" },
    2: { day: "2nd" },
    3: { day: "3rd" },
    21: { day: "21st" },
    22: { day: "22nd" },
    23: { day: "23rd" },
    31: { day: "31st" }
  };
  return daysSuffixExceptions[day] ? daysSuffixExceptions[day].day : `${day}th`;
};

const getReadableTimeStamp = (timeStamp: TimeStamp): string => {
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
