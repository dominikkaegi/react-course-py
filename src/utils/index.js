import * as userApi from "api/api.user";

export function signup({ firstName, lastName, email, password }) {
  return userApi.signup({ firstName, lastName, email, password }).catch(e => e);
}
