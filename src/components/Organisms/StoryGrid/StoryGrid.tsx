import React from "react";
import Story from "../../Molecules/Story/Story";
import "./StoryGrid.css";

import StoryInterface from "../../../shared/StoryInterface";

interface Props {
  stories: StoryInterface[];
}

const StoryGrid: React.SFC<Props> = ({ stories }) => (
  <div className="grid-wrapper">
    {stories.map(story => (
      <Story
        timestamp={story.timestamp}
        title={story.title}
        score={story.score}
        author={story.author}
        text={story.text}
        url={story.url}
        key={story.id}
      />
    ))}
  </div>
);

export default StoryGrid;
