import getReadableTimeStamp, {
  getReadableTime,
  getMonth,
  getDay
} from "../getReadableTimeStamp";

describe("getTimeStamp", () => {
  it("should return the correct month", () => {
    expect(getMonth(2)).toBe("March");
  });

  it("should return the correct day", () => {
    expect(getDay(14)).toBe("14th");
    expect(getDay(1)).toBe("1st");
  });

  it("should return readble time unit", () => {
    expect(getReadableTime(1)).toBe("01");
    expect(getReadableTime(33)).toBe(33);
  });

  it("should return a timestamp", () => {
    const constantDate = new Date("2017-06-13T04:41:20");
    expect(getReadableTimeStamp(constantDate)).toBe("13th June 2017 04:41:20");
  });
});
