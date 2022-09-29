import React from "react";
import { useLocation } from "react-router-dom";
import { NewsBox } from "./NewsBox";

export const SearchNews = () => {
  const location = useLocation();
  const { data, query } = location.state;
  console.log(data);

  return (
    <div>
      <h2 className="queryTitle">'{query}' - Result(s)</h2>
      <div className="newsContainer">
        {data.articles.map((item) => {
          return (
            <NewsBox
              title={item.title}
              description={item.description}
              author={item.author}
              imageUrl={item.urlToImage}
              alt="News Image"
              source={item.source.name}
              date={item.publishedAt}
              publishedAt={item.publishedAt}
              newsUrl={item.url}
            />
          );
        })}
      </div>
    </div>
  );
};
