import * as userApi from "api/api.user";
import * as apiTweet from "api/apit.tweet";

export async function signup({ firstName, lastName, email, password }) {
  return userApi.signup({ firstName, lastName, email, password });
}

export async function login({ email, password }) {
  return userApi.login({ email, password });
}

export async function getActiveUser() {
  return userApi.getActiveUser();
}

export async function createTweet({ message, user }) {
  return apiTweet.create({ message, user });
}

export function getTweets() {
  return apiTweet.getTweets();
}

export function subscribeToNewTweets(cb) {
  return apiTweet.subscribe(cb);
}
