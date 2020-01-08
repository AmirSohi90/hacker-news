const getMaxPage = numberOfStories => {
  if (numberOfStories % 24 === 0) return numberOfStories / 24;
  return Math.ceil(numberOfStories / 24);
};

export default getMaxPage;
