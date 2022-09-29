import React, { useEffect, useState } from "react";
import axios from "axios";
import { endpointApiTopNews } from "../api";
import { NewsBox } from "./NewsBox";

export const News = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await axios.get(endpointApiTopNews());
      const data = await res.data;
      setArticles(data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="newsContainer">
      {articles.map((item) => {
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
  );
};
