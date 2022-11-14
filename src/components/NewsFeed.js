import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const NewsFeed = () => {
  const newsResult = useSelector((state) => state.newsReducer);
  const isLoading = newsResult.loading;
  const login = newsResult.login;
  // console.warn("news feed result", login);
  let result = newsResult.news;
  // console.log("news feed result", result);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : login ? (
        <div className="feed-container">
          {result &&
            result
              .filter((item, ind) => ind < 10)
              .map((item) => (
                <div className="news-feed" key={item.id}>
                  <h1>{item.title}</h1>
                  <img src={item.url} alt="" />
                  {/* <p>{item.description}</p> */}
                  <div style={{ padding: "15px" }}>
                    <a
                      href={item.thumbnailUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More...
                    </a>
                  </div>
                </div>
              ))}
        </div>
      ) : (
        <h1>Please Login</h1>
      )}
    </>
  );
};

export default NewsFeed;
