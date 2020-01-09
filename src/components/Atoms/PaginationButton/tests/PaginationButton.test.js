import React from "react";
import PaginationButton from "../PaginationButton";
import { mount } from "enzyme";

describe("PaginationButton", () => {
  const onClickMock = jest.fn();

  it("should not be able to execute onClick function if disabled", () => {
    const wrapper = mount(<PaginationButton disabled onClick={onClickMock} />);

    expect(wrapper.hasClass("disabled"));
    wrapper.simulate("click");
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });

  it("should be able to execute onClick function if not disabled", () => {
    const wrapper = mount(
      <PaginationButton disabled={false} onClick={onClickMock} />
    );

    expect(wrapper.hasClass("enabled"));
    wrapper.simulate("click");
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
