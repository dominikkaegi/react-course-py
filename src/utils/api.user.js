import {
  getEntity,
  getEntityById,
  createEntity,
  deleteEntity,
  updateEntity,
  seedStorage
} from "./api";

import usersData from "./users.json";

const USER_KEY = "USERS";

export async function seedUsers(force = false) {
  seedStorage(USER_KEY, usersData, force);
}

export async function getUsers() {
  return getEntity(USER_KEY);
}
export async function getUserById(id) {
  return getEntityById(USER_KEY, id);
}
export async function createUser({ email, firstName, lastName, avatar }) {
  let users = await getUsers();
  let userExists = users.find(item => item.email === email);
  if (userExists) {
    throw new Error("User with this e-mail already exists");
  }

  return createEntity(USER_KEY, {
    email,
    firstName,
    lastName,
    avatar
  });
}
export async function updateUser({ id, email, firstName, lastName, avatar }) {
  return updateEntity(USER_KEY, {
    id,
    email,
    firstName,
    lastName,
    avatar
  });
}
export async function deleteUserById(id) {
  return deleteEntity(USER_KEY, id);
}
