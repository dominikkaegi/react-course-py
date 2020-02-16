import { pubsub } from "./helpers";
import { createEntity, getEntity } from "./api";

const TWEET_KEY = "TWEET_KEY";

const NEW_TWEET = "NEW_TWEET";

export async function create({ message, user }) {
  let tweet = {
    message,
    user
  };

  let newTweet = await createEntity(TWEET_KEY, tweet);

  pubsub.publish(NEW_TWEET, { new: newTweet });
  return newTweet;
}

export async function getTweets() {
  let tweets = getEntity(TWEET_KEY);
  return tweets;
}

export function subscribe(cb) {
  return pubsub.subscribe(NEW_TWEET, cb);
}
