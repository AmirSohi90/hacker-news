import React from "react";
import Pagination from "../Pagination";
import { mount } from "enzyme";

describe("Pagination", () => {
  const increasePaginationMock = jest.fn();
  const decreasePaginationMock = jest.fn();

  it("should render Pagination with the page-decrease button disabled", () => {
    const wrapper = mount(
      <Pagination
        page={1}
        increasePagination={increasePaginationMock}
        decreasePagination={decreasePaginationMock}
        maxPage={3}
      />
    );

    expect(wrapper.find(".page-decrease").props().disabled).toBe(true);
    wrapper.find(".page-increase").simulate("click");
    expect(increasePaginationMock).toHaveBeenCalledTimes(1);
  });

  it("should render Pagination with the page-increase button disabled", () => {
    const wrapper = mount(
      <Pagination
        page={3}
        increasePagination={increasePaginationMock}
        decreasePagination={decreasePaginationMock}
        maxPage={3}
      />
    );

    expect(wrapper.find(".page-increase").props().disabled).toBe(true);
    wrapper.find(".page-decrease").simulate("click");
    expect(decreasePaginationMock).toHaveBeenCalledTimes(1);
  });
});
