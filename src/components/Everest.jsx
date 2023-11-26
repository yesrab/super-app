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

  const myStyle = {
    backgroundImage: `url(${
      isLoading ? newsImage : isError ? newsImage : news.articles[0].urlToImage
    })`,
    overflow: "hidden",
  };

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

  return (
    <div className='everest'>
      <div referrerpolicy='no-referrer' style={myStyle} className='newsImage'>
        <div className='newsTitle'>
          <p>{isLoading ? "Loading..." : isError ? "Error.." : news.articles[0].title}</p>
          <p>{currentTime}</p>
        </div>
      </div>
      <div className='newsContent'>
        {isLoading ? "Loading...." : isError ? "Error..." : news.articles[0].content}
      </div>
    </div>
  );
}

export default Everest;
