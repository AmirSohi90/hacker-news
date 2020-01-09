### Comments on the Code

1. The requirement for the task was to fetch stories from the hacker news API and make it look nicer than hacker news. One thing I noticed was that displaying the text was part of the task however according to the Hacker News API text isn't returned when fetching the story. As a result what I had done was I fetched the first comment per story and displayed that instead.

Although what I realised the text returned was html hence why I used dangerouslySetInnerHTML however by doing that it got rid of the ellipsis effect.

2. Due to the longevity of getting 500 stories at once the loading screen takes a while. I considered calling 24 stories at a time, to save loading time, by slicing the IDs based on the pageStart and pageEnd and passing that into getTopStories instead of all the IDs. I decided to not go through with this as I took the future proofing approach and thought if a feature such as searching or sorting were to be implemented then you could only do the 24 stories returned at a time.

Another solution that I contemplated was getting the first few pages worth of stories, set that to the state and then fetch the rest but my concern was that if a user were to flick through the pages they'd get to a blank page whilst the app was fetching the rest of the stories.

Something like the following:

```
  componentDidMount = async () => {
    const storyIds = await getTopStoriesIds();
    const firstPage = await getTopStories(storyIds.slice(0, 72));
    const maxPage = getMaxPage(storyIds.length);


    this.setState({ stories: [...firstPage], maxPage });
    const rest = await getTopStories(storyIds.slice(24, storyIds.length));
    const stories = [...firstPage, ...rest]
    this.setState({stories})
  };
```

3. Although not a requirement I implemented pagination. I didn't like all 500 stories on one page, I thought it looked messy.

### Things I'd have done with more time

1. Used Styled Components (or something similar) instead of standard CSS - unfortunately this occurred to me later in the task when I was changing the className based on clicks

2. Used Redux for state management - it was fine with the initial task but once I added pagination redux would've been easier to have Redux.
