import React, { useState, useEffect } from "react";
import "../styles/everest.css";
import newsImage from "../assets/news/tempNews.png";
import { useQuery } from "@tanstack/react-query";
function Everest({ time }) {
  const [currentTime, setCurrentTime] = useState(time());
  const {
    isLoading,
    isError,
    data: news,
  } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
    staleTime: 10000,
  });

  async function getNews() {
    const responce = await fetch(`/api/news`);
    const data = await responce.json();
    return data;
  }

  let myinterval = null;
  useEffect(() => {
    if (!myinterval) {
      myinterval = setInterval(() => {
        setCurrentTime(time());
      }, 6000);
    }
    return () => {
      if (myinterval) {
        clearInterval(myinterval);
      }
    };
  }, []);

  const validIndex =
    news &&
    news.articles.findIndex((article) => article.title && article.content && article.urlToImage);

  // Use the valid index or default to the first element
  const selectedArticle = news ? news.articles[validIndex >= 0 ? validIndex : 0] : null;

  const myStyle = {
    backgroundImage: `url(${
      isLoading ? newsImage : isError ? newsImage : selectedArticle.urlToImage
    })`,
    overflow: "hidden",
  };

  return (
    <div className='everest'>
      <div referrerPolicy='no-referrer' style={myStyle} className='newsImage'>
        <div className='newsTitle'>
          <p>{isLoading ? "Loading..." : isError ? "Error.." : selectedArticle.title}</p>
          <p>{currentTime}</p>
        </div>
      </div>
      <div className='newsContent'>
        {isLoading ? "Loading...." : isError ? "Error..." : selectedArticle.content}
      </div>
    </div>
  );
}

export default Everest;
