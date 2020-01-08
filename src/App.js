import React, { Component } from "react";
import StoryGrid from "./components/Organisms/StoryGrid/StoryGrid";
import Pagination from "./components/Molecules/Pagination/Pagination";
import Loading from "./components/Atoms/Loading/Loading";
import { getTopStories, getTopStoriesIds } from "./services/getTopStories";
import getMaxPage from "./utils/getMaxPage";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      storyIds: [],
      stories: [],
      page: 1,
      pageStart: 0,
      pageEnd: 24,
      maxPage: null
    };
  }

  componentDidMount = async () => {
    const storyIds = await getTopStoriesIds();
    const stories = await getTopStories(storyIds);
    const maxPage = getMaxPage(stories.length);
    this.setState({ storyIds, stories, maxPage });
  };

  increasePagination = () => {
    const { pageStart, pageEnd, page } = this.state;
    this.setState({
      pageStart: pageStart + 24,
      pageEnd: pageEnd + 24,
      page: page + 1
    });
  };

  decreasePagination = () => {
    const { pageStart, pageEnd, page } = this.state;
    this.setState({
      pageStart: pageStart - 24,
      pageEnd: pageEnd - 24,
      page: page - 1
    });
  };

  render() {
    const {
      increasePagination,
      decreasePagination,
      state: { stories, pageStart, pageEnd, page, maxPage }
    } = this;
    return (
      <div className="app">
        {Boolean(!stories.length) && <Loading />}
        {Boolean(stories.length) && (
          <div>
            <header className="app-header">
              <h1>Hacker News?! Hacker News.</h1>
              <Pagination
                maxPage={maxPage}
                page={page}
                increasePagination={increasePagination}
                decreasePagination={decreasePagination}
              />
            </header>
            <main className="main">
              <StoryGrid stories={stories.slice(pageStart, pageEnd)} />
            </main>
          </div>
        )}
      </div>
    );
  }
}

export default App;
