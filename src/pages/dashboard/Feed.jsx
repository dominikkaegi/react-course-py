import React, { useState, useEffect } from "react";

import { subscribeToNewTweets, getTweets } from "utils";

export default function Feed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    let isCurrent = true;
    getTweets().then(data => {
      if (isCurrent) {
        setTweets(data);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, []);

  useEffect(() => {
    let unsub = subscribeToNewTweets(data => {
      const { new: newTweet } = data;
      setTweets([...tweets, newTweet]);
    });
    return unsub;
  }, [tweets]);

  return (
    <div>
      <h1>Feed</h1>
      {tweets.map(item => {
        return (
          <div key={item.id}>
            <pre>{JSON.stringify(item, null, 2)}</pre>
          </div>
        );
      })}
    </div>
  );
}
