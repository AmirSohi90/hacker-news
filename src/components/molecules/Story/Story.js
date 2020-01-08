import React, { useState } from "react";
import "./Story.css";

const Story = ({ title, text, url, author, score, timestamp }) => {
  const [isExpanded, setExpanded] = useState(false);

  const articleClassName = isExpanded ? "box box-expanded" : "box";

  const scoreWrapperClassName = isExpanded
    ? "score-wrapper score-wrapper-expanded"
    : "score-wrapper";

  const storyTextClassName = isExpanded
    ? "story-text-wrapper-expanded"
    : "story-text-wrapper";

  return (
    <article
      onClick={() => setExpanded(!isExpanded)}
      className={articleClassName}
    >
      <span className={scoreWrapperClassName}>
        <p>{score}</p>
        <p>Score</p>
      </span>
      <section className="article-wrapper">
        <header className="story-header">
          <h2 className="story-title">
            <a href={url} className="story-link">
              {title}
            </a>
          </h2>
          <h3 className="story-author">By {author}</h3>
        </header>
        <span className={storyTextClassName}>
          <p dangerouslySetInnerHTML={{ __html: text }} />
        </span>
        <span className="story-timestamp">{timestamp}</span>
      </section>
    </article>
  );
};

export default Story;
