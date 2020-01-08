import React, { Component } from "react";
import { getTopStories, getTopStoriesIds } from "./services/getTopStories";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      storyIds: [],
      stories: []
    };
  }

  componentDidMount = async () => {
    const storyIds = await getTopStoriesIds();
    const stories = await getTopStories(storyIds);
    this.setState({ storyIds, stories });
  };

  render() {
    const { stories } = this.state;
    return Boolean(!stories.length) ? (
      <div className="App">
        <p>Loading...</p>
      </div>
    ) : (
      <div className="App">
        <header>{/* header will go here */}</header>
        <main className="main">{/* story grid goes here */}</main>
      </div>
    );
  }
}

export default App;
