import {
  getEntity,
  getEntityById,
  createEntity,
  deleteEntity,
  updateEntity,
  seedStorage
} from "./api";
import bcrypt from "bcryptjs";

import usersData from "./data/users.json";
import avatars from "./data/avatars.json";

const USER_KEY = "USERS";
const ACTIVE_USER = "ACTIVE_USER";

export async function seedUsers(force = false) {
  seedStorage(USER_KEY, usersData, force);
}
seedUsers();

function removePassword(user) {
  delete user.password;
  return JSON.parse(JSON.stringify(user));
}
function getUsersWithPassword() {
  return getEntity(USER_KEY);
}

export async function getUsers() {
  const users = getEntity(USER_KEY);
  const passwordLessUsers = users.map(removePassword);
  return passwordLessUsers;
}

export async function signup({ email, firstName, lastName, password }) {
  let users = await getUsersWithPassword();
  let userExists = users.find(item => item.email === email);
  if (userExists) {
    throw new Error("User with this e-mail already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = createEntity(USER_KEY, {
    email,
    firstName,
    lastName,
    avatar: avatars[0].url,
    password: hashedPassword
  });

  const stripedUser = removePassword(user);
  createEntity(ACTIVE_USER, stripedUser);
  return stripedUser;
}
export async function login({ email, password }) {
  let users = await getUsersWithPassword();
  let user = users.find(item => item.email === email);
  if (!user) {
    throw new Error("Invalid user or password");
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error("Invalid user or password");
  }

  const stripedUser = removePassword(user);
  createEntity(ACTIVE_USER, stripedUser);
  return stripedUser;
}

export async function getActiveUser() {
  return getEntity(ACTIVE_USER)[0];
}

// export async function updateUser({ id, email, firstName, lastName, avatar }) {
//   return updateEntity(USER_KEY, {
//     id,
//     email,
//     firstName,
//     lastName,
//     avatar
//   });
// }
// export async function deleteUserById(id) {
//   return deleteEntity(USER_KEY, id);
// }
// export async function getUserById(id) {
//   try {
//     return getEntityById(USER_KEY, id);
//   } catch (error) {
//     console.log(error());
//   }
//   return;
// }
