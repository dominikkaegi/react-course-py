// https://reqres.in/

import users from "./users.json";
import todos from "./todos.json";

let db = {
  users,
  todos
};

export async function getUsers() {
  return get("users");
}
export async function getUserById(id) {
  return getById("users", id);
}
export async function createUser({ email, firstName, lastName, avatar }) {
  let userExists = users.find(item => item.email === email);
  if (userExists) {
    throw new Error("User with this e-mail already exists");
  }

  return create("users", {
    email,
    firstName,
    lastName,
    avatar
  });
}
export async function updateUser(newData) {
  const { id, email, firstName, lastName, avatar } = newData;
  return update("users", {
    id,
    email,
    firstName,
    lastName,
    avatar
  });
}
export async function deleteUserById(id) {
  return deleteEntity("users", id);
}

export async function get(entity) {
  return sleep().then(() => db[entity]);
}
export async function getById(entity, id) {
  return sleep().then(() => db[entity].find(item => item.id === id));
}
export async function create(entity, data) {
  let newEntity = {
    ...data,
    id: uuid(),
    createdAt: JSON.stringify(new Date())
  };

  return sleep().then(() => {
    db[entity].push(newEntity);
    return newEntity;
  });
}
export async function update(entity, newData) {
  sleep().then(() => {
    let exists = db[entity].find(item => item.id === newData.id);
    if (!exists)
      throw new Error(`${entity} with id ${newData.id} does not exists.`);

    db[entity] = db[entity].map(item =>
      item.id === newData.id ? newData : item
    );

    return newData;
  });
}
export async function deleteEntity(entity, id) {
  return sleep().then(() => {
    let item = db[entity].find(item => item.id === id);
    if (!item) throw new Error("Item not found");

    db[entity] = db[entity].filter(item => item.id !== id);

    return { id };
  });
}

function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function sleep(ms) {
  let randomDelay = Math.random() * 200 + 200;
  let delay = ms ? ms : randomDelay;

  return new Promise(resolve => setTimeout(resolve, delay));
}
