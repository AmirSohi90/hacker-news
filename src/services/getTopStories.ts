import axios from "axios";
import getReadableTimestamp from "../utils/getReadableTimestamp";
import StoryInterface from "../shared/StoryInterface";

interface Item {
  by: string;
  id: number;
  score: number;
  title: string;
  url: string;
  kids: number[];
  time: number;
  text?: string;
}

export const getCommentFromHackerNews = async (
  kids: number[]
): Promise<string> => {
  if (Boolean(Array.isArray(kids) && kids.length)) {
    const data = await getItemFromHackerNews(kids[0]);
    return data.text ? data.text : "No Comment";
  }
  return "No Comment";
};

export const getTopStoriesIds = async (): Promise<number[]> => {
  const response = await axios.get(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  return response.data;
};

export const getItemFromHackerNews = async (id: number): Promise<Item> => {
  const response = await axios.get(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  return response.data;
};

export const getTopStories = async (
  storyIds: number[]
): Promise<StoryInterface[]> => {
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
      } = await getItemFromHackerNews(storyId);

      const text: string = await getCommentFromHackerNews(kids);

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
