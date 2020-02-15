import {
  getEntity,
  getEntityById,
  createEntity,
  deleteEntity,
  updateEntity,
  seedStorage
} from "./api";
import bcrypt from "bcryptjs";

import usersData from "./users.json";

const USER_KEY = "USERS";

export async function seedUsers(force = false) {
  seedStorage(USER_KEY, usersData, force);
}
seedUsers();

function removePassword(user) {
  delete user.password;
  return JSON.parse(JSON.stringify(user));
}

export async function getUsers() {
  return getEntity(USER_KEY);
}
export async function getUserById(id) {
  try {
    return getEntityById(USER_KEY, id);
  } catch (error) {
    console.log(error());
  }
  return;
}
export async function signup({ email, firstName, lastName, password }) {
  let users = await getUsers();
  let userExists = users.find(item => item.email === email);
  if (userExists) {
    throw new Error("User with this e-mail already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = createEntity(USER_KEY, {
    email,
    firstName,
    lastName,
    password: hashedPassword
  });

  return removePassword(user);
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
