// https://reqres.in/
import { sleep, uuid, storage } from "./helpers";

import users from "./users.json";
import todos from "./todos.json";

async function delay(data) {
  await sleep();
  return data;
}

export function seedStorage(force) {
  let usersExists = storage.get("users");
  if (!usersExists || force) {
    console.log("seeding storage");
    const seedUsers = () => storage.set("users", users);
    seedUsers();
  }
}
seedStorage();

export async function getUsers() {
  return getEntity("users");
}
export async function getUserById(id) {
  return getEntityById("users", id);
}
export async function createUser({ email, firstName, lastName, avatar }) {
  let userExists = users.find(item => item.email === email);
  if (userExists) {
    throw new Error("User with this e-mail already exists");
  }

  return createEntity("users", {
    email,
    firstName,
    lastName,
    avatar
  });
}
export async function updateUser({ id, email, firstName, lastName, avatar }) {
  return updateEntity("users", {
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

//  ----------- DATABASE ---------
let deepClone = data => {
  return JSON.parse(JSON.stringify(data));
};

export async function getEntity(entity) {
  return Promise.resolve()
    .then(() => storage.get(entity))
    .then(deepClone)
    .then(delay);
}
export async function getEntityById(entity, id) {
  return Promise.resolve()
    .then(() => {
      let entities = storage.get(entity);
      return entities.find(item => item.id === id);
    })
    .then(deepClone)
    .then(delay);
}
export async function createEntity(entity, data) {
  let newEntity = {
    ...data,
    id: uuid(),
    createdAt: JSON.stringify(new Date())
  };

  return Promise.resolve()
    .then(() => {
      let items = storage.get(entity);
      items.push(newEntity);
      storage.set(entity, items);
      return newEntity;
    })
    .then(deepClone)
    .then(delay);
}
export async function updateEntity(entity, newData) {
  return Promise.resolve()
    .then(() => {
      let entities = storage.get(entity);

      let exists = entities.find(item => item.id === newData.id);
      if (!exists)
        throw new Error(`${entity} with id ${newData.id} does not exists.`);

      entities = entities.map(item => {
        return item.id === newData.id ? newData : item;
      });

      storage.set(entity, entities);

      return newData;
    })
    .then(deepClone)
    .then(delay);
}
export async function deleteEntity(entity, id) {
  return Promise.resolve()
    .then(() => {
      let entities = storage.get(entity);
      let item = entities.find(item => item.id === id);
      if (!item) throw new Error("Item not found");
      entities = entities.filter(item => item.id !== id);

      storage.set(entity, entities);
      return { id };
    })
    .then(deepClone)
    .then(delay);
}
