import React, { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import { Link } from "react-router-dom";

import { subscribeToNewTweets, getTweets, formatDate } from "utils";

const useFeed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    let isCurrent = true;
    getTweets().then(tweets => {
      if (isCurrent) {
        setTweets(tweets);
      }
    });

    return () => {
      isCurrent = false;
    };
  }, []);

  useEffect(() => {
    const unsub = subscribeToNewTweets(data => {
      const newTweet = data.new;
      setTweets([newTweet, ...tweets]);
    });
    return unsub;
  }, [tweets]);

  return tweets;
};

export default function Feed() {
  const tweets = useFeed();
  return (
    <div>
      <h1>Feed</h1>
      {tweets.map(tweet => {
        return (
          <div key={tweet.id}>
            <TweetCard tweet={tweet} />
          </div>
        );
      })}
    </div>
  );
}

function TweetCard({ tweet }) {
  const { user } = tweet;
  let date = new Date(tweet.createdAt);

  return (
    <Card style={{ margin: "10px" }}>
      <CardHeader
        avatar={
          <Link to={`/profile/${user.id}`}>
            <Avatar
              aria-label={`${user.firstName} ${user.lastName}`}
              src={user.avatar}
            >
              R
            </Avatar>
          </Link>
        }
        title={`${user.firstName} ${user.lastName}`}
        subheader={formatDate(date)}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {tweet.message}
        </Typography>
      </CardContent>
    </Card>
  );
}
