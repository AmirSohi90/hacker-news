import getMaxPage from "../getMaxPage";

describe("getMaxPage", () => {
  it("returns the correct max page if number of stories is divisble by 24", () => {
    expect(getMaxPage(48)).toBe(2);
  });

  it("returns the correct max page if number of stories is not divisble by 24", () => {
    expect(getMaxPage(49)).toBe(3);
  });
});
