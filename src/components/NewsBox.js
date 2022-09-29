import React from "react";

export const NewsBox = (props) => {
  const {
    title,
    description,
    imageUrl,
    author,
    alt,
    source,
    date,
    publishedAt,
    newsUrl,
  } = props;
  return (
    <div className="newsBoxContainer">
        <img className="image" src={imageUrl} alt={alt} />
      <div className="newsBody">
        <h4 className="newsTitle">{title}</h4>
        <div className="newsDesc">
          <p>{description}</p>
        </div>
        <div>
          <p>{author}</p>
          <p>{source} At {date}</p>
        </div>
        <a
          href={newsUrl}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
};
