import axios from "axios";
import getReadableTimestamp from "../utils/getReadableTimestamp";

export const getTopStoriesIds = async () => {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  return response.data;
};

export const getItemFromHackerNews = async (id, itemType) => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  if (itemType === "story") return response.data;
  if (itemType === "comment")
    return response.data.text ? response.data.text : "No Comment";
};

export const getTopStories = async storyIds => {
  return Promise.all(
    storyIds.map(async storyId => {
      const {
        by,
        id,
        score,
        title,
        url,
        kids,
        time
      } = await getItemFromHackerNews(storyId, "story");

      const text =
        Boolean(Array.isArray(kids) && kids.length) && Boolean(kids.length)
          ? await getItemFromHackerNews(kids[0], "comment")
          : "No Comment";

      const timestamp = new Date(time * 1000);

      return {
        author: by,
        id,
        score,
        title,
        url,
        timestamp: getReadableTimestamp(timestamp),
        text
      };
    })
  );
};
