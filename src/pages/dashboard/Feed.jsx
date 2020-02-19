import React, { useState, useEffect } from "react";

import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

import { subscribeToNewTweets, getTweets, formatDate } from "utils";

export default function Feed() {
  const [tweets, setTweets] = useState([]);

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
          <Avatar
            aria-label={`${user.firstName} ${user.lastName}`}
            src={user.avatar}
          >
            R
          </Avatar>
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
