import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsBox } from "./NewsBox";
import { enpointApiCategory } from "../api";

export const CategoryNews = (props) => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await axios.get(enpointApiCategory(props.category));
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
    <div>
      <h1 className="newsCategoryTitle">{props.name} News</h1>
      <div className="newsContainer">
        {articles.map((item) => {
          return (
            <NewsBox
              key={item.url}
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
