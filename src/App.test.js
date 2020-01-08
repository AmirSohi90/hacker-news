import React from "react";
import App from "./App";
import StoryGrid from "./components/Organisms/StoryGrid/StoryGrid";
import Story from "./components/Molecules/Story/Story";
import Pagination from "./components/Molecules/Pagination/Pagination";
import { mount } from "enzyme";

describe("App", () => {
  const mockedStories = [
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
  ];

  it("should render App with the loading component", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("loading").text()).toBe("Loading...");
  });

  it("should render App with the correct components", () => {
    const wrapper = mount(<App />);
    wrapper.setState({ stories: mockedStories });
    wrapper.update();
    expect(wrapper.find(StoryGrid).length).toBe(1);
    expect(wrapper.find(Story).length).toBe(2);
    expect(wrapper.find(Pagination).length).toBe(1);
  });
});
