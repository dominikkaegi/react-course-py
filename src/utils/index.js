import * as userApi from "api/api.user";
import * as apiTweet from "api/apit.tweet";
import * as authApi from "api/api.auth";

export async function getUsers() {
  return userApi.getUsers();
}

export async function signup({ firstName, lastName, email, password }) {
  return authApi.signup({ firstName, lastName, email, password });
}

export async function login({ email, password }) {
  return authApi.login({ email, password });
}

export async function logout() {
  return authApi.logout();
}

export async function getActiveUser() {
  return userApi.getActiveUser();
}

export async function getUserById(id) {
  return userApi.getUserById(id);
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

export function formatDate(date) {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const leftPade = num => {
    let str = "" + num;
    return str.length === 1 ? `0${str}` : str;
  };

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  const hours = leftPade(date.getHours());
  const minutes = leftPade(date.getMinutes());

  const dateString = `${hours}:${minutes}, ${day}.${monthNames[monthIndex]} ${year}`;
  return dateString;
}
