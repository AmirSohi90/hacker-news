import React from "react";
import Pagination from "../Pagination";
import { mount } from "enzyme";

describe("Pagination", () => {
  const increasePaginationMock = jest.fn();
  const decreasePaginationMock = jest.fn();

  it("should render Pagination with the correct props", () => {
    const wrapper = mount(
      <Pagination
        page={3}
        increasePagination={increasePaginationMock}
        decreasePagination={decreasePaginationMock}
        maxPage={3}
      />
    );
    expect(wrapper.find(".page-title").text()).toBe("3");
    expect(wrapper.find(".disabled").length).toBe(1);
    expect(wrapper.find(".enabled").length).toBe(1);
  });
});
