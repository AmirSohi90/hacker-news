import React from "react";
import Story from "../Story";
import { mount } from "enzyme";

describe("Story", () => {
  const wrapper = mount(
    <Story
      title="test title"
      text="test text"
      url="test url"
      author="test author"
      score="test score"
      timestamp="test timestamp"
    />
  );

  it("should render the story with the correct props", () => {
    expect(wrapper.find(".box").length).toBe(1);
    expect(wrapper.find(".article-score").text()).toBe("test score");
    expect(wrapper.find(".story-title").text()).toBe("test title");
    expect(wrapper.find(".story-author").text()).toBe("By test author");
    expect(wrapper.find(".story-link").props().href).toBe("test url");
    expect(wrapper.find(".story-text-wrapper").text()).toBe("test text");
    expect(wrapper.find(".story-timestamp").text()).toBe("test timestamp");
  });

  it("should render the story with the correct classes after clicking on it", () => {
    wrapper.find(".box").simulate("click");
    expect(wrapper.find(".box-expanded").length).toBe(1);
    expect(wrapper.find(".score-wrapper-expanded").length).toBe(1);
    expect(wrapper.find(".story-text-wrapper-expanded").length).toBe(1);
  });
});
