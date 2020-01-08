import React from "react";
import StoryGrid from "../StoryGrid";
import Story from "../../../Molecules/Story/Story";
import { mount } from "enzyme";

describe("StoryGrid", () => {
  const props = {
    stories: [
      {
        timestamp: "test timestamp 1",
        title: "test title 1",
        score: "test score 1",
        author: "test author 1",
        text: "test text 1",
        url: "test url 1",
        id: 1
      },
      {
        timestamp: "test timestamp 2",
        title: "test title 2",
        score: "test score 2",
        author: "test author 2",
        text: "test text 2",
        url: "test url 2",
        id: 2
      }
    ]
  };

  it("should render the story grid with the correct amount of stories", () => {
    const wrapper = mount(<StoryGrid stories={props.stories} />);
    expect(wrapper.find(Story).length).toBe(2);
  });
});
