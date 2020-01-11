import axios from "axios";
import {
  getTopStoriesIds,
  getItemFromHackerNews,
  getTopStories,
  getCommentFromHackerNews
} from "../getTopStories";

jest.mock("axios");

describe("getTopStoriesIds", () => {
  it("fetches successfully data from the API", async () => {
    const data = { data: [1, 2, 3, 4, 5] };

    axios.get.mockImplementation(() => Promise.resolve(data));

    await expect(getTopStoriesIds()).resolves.toEqual(data.data);
  });
});

describe("getItemFromHackerNews", () => {
  it("successfully fetches a story from Hacker News", async () => {
    const data = { data: "this is a story" };

    axios.get.mockImplementation(() => Promise.resolve(data));

    await expect(getItemFromHackerNews(1)).resolves.toEqual(data.data);
  });

  it("successfully fetches a comment from Hacker News", async () => {
    const data = { data: { text: "this is a comment" } };

    axios.get.mockImplementation(() => Promise.resolve(data));

    await expect(getItemFromHackerNews(1)).resolves.toEqual(data.data);
  });
});

describe("getTopStories", () => {
  it("fetches the top stories from hacker news", async () => {
    const data = {
      data: {
        by: "author",
        id: 1,
        score: 500,
        title: "title",
        url: "url",
        kids: [],
        time: 1175714200
      }
    };

    const returnedData = [
      {
        author: "author",
        id: 1,
        score: 500,
        text: "No Comment",
        timestamp: "4th April 2007 20:16:40",
        title: "title",
        url: "url"
      }
    ];

    axios.get.mockImplementation(() => Promise.resolve(data));

    await expect(getTopStories([1])).resolves.toEqual(returnedData);
  });
});

describe("getCommentFromHackerNews", () => {
  it("fetches the right comment from hacker news", async () => {
    const returnedData = {
      text: "Comment"
    };

    axios.get.mockImplementation(() => Promise.resolve({ data: returnedData }));

    await expect(getCommentFromHackerNews([1])).resolves.toEqual(
      returnedData.text
    );
  });

  it("returns no comment if data from getItemFromHackerNews doesn't have text key", async () => {
    const returnedData = {
      time: "testing time"
    };
    axios.get.mockImplementation(() => Promise.resolve({ data: returnedData }));

    await expect(getCommentFromHackerNews([1])).resolves.toEqual("No Comment");
  });

  it("returns no comment if data from getItemFromHackerNews doesn't have text key", async () => {
    const returnedData = {
      time: "testing time"
    };
    axios.get.mockImplementation(() => Promise.resolve({ data: returnedData }));

    await expect(getCommentFromHackerNews([1])).resolves.toEqual("No Comment");
  });

  it("returns no comment if no data comes back from getItemFromHackerNews", async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: {} }));

    await expect(getCommentFromHackerNews([1])).resolves.toEqual("No Comment");
  });
});
