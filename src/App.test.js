import React from "react";
import App from "./App";
import StoryGrid from "./components/Organisms/StoryGrid/StoryGrid";
import Story from "./components/Molecules/Story/Story";
import Pagination from "./components/Molecules/Pagination/Pagination";
import Loading from "./components/Atoms/Loading/Loading";
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
    expect(wrapper.find(Loading).length).toBe(1);
  });

  it("should render App with the correct components", () => {
    const wrapper = mount(<App />);
    wrapper.setState({ stories: mockedStories });
    wrapper.update();
    expect(wrapper.find(Loading).length).toBe(0);
    expect(wrapper.find(StoryGrid).length).toBe(1);
    expect(wrapper.find(Story).length).toBe(2);
    expect(wrapper.find(Pagination).length).toBe(1);
  });

  it("should increase page on increasePagination click", () => {
    const wrapper = mount(<App />);
    wrapper.setState({ maxPage: 3, page: 1, stories: mockedStories.fill(5) });
    wrapper.update();

    expect(wrapper.find(".page-title").text()).toBe("1");
    wrapper.find(".enabled").simulate("click");
    expect(wrapper.find(".page-title").text()).toBe("2");
    expect(wrapper.state("page")).toBe(2);
  });

  it("should decrease page on decreasePagination click", () => {
    const wrapper = mount(<App />);
    wrapper.setState({ maxPage: 3, page: 2, stories: mockedStories.fill(5) });
    wrapper.update();

    expect(wrapper.find(".page-title").text()).toBe("2");
    wrapper
      .find(".enabled")
      .at(0)
      .simulate("click");
    expect(wrapper.find(".page-title").text()).toBe("1");
    expect(wrapper.state("page")).toBe(1);
  });
});
