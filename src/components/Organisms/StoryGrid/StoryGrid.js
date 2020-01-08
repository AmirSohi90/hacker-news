import React from "react";
import Story from "../../Molecules/Story/Story";
import "./StoryGrid.css";

const StoryGrid = ({ stories }) => (
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
