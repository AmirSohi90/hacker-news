const getMaxPage = numberOfStories =>
  numberOfStories % 24 === 0
    ? numberOfStories / 24
    : Math.ceil(numberOfStories / 24);

export default getMaxPage;
