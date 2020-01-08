import React, { Component } from "react";
import StoryGrid from "./components/molecules/StoryGrid/StoryGrid";
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
    return (
      <div className="app">
        {Boolean(!stories.length) && <p>Loading...</p>}
        <header className="app-header">{/* header will go here */}</header>
        <main className="main">
          <StoryGrid stories={stories} />
        </main>
      </div>
    );
  }
}

export default App;
