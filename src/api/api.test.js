import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
  seedUsers
} from "./api.user";

beforeEach(async done => {
  await seedUsers(true);
  done();
});

test("can get users", async () => {
  let users = await getUsers();
  expect(users.length).toBe(6);
});

test("can get user by id", async () => {
  const id = "7";
  let users = await getUserById(id);
  expect(users.id).toBe(id);
});

test("can create user", async () => {
  let userData = {
    email: "test@gmail.com",
    firstName: "firstName",
    lastName: "Joe",
    avatar: "htttps://urlToavatar.com"
  };

  let newUser = await createUser(userData);
  expect(createUser.id).not.toBeNull();
  expect(newUser.email).toBe(userData.email);
  expect(newUser.firstName).toBe(userData.firstName);
  expect(newUser.lastName).toBe(userData.lastName);
  expect(newUser.avatar).toBe(userData.avatar);

  let users = await getUsers();
  expect(users.length).toBe(7);
});

test("can't create user twice", async () => {
  let userData = {
    email: "test@gmail.com",
    firstName: "firstName",
    lastName: "Joe",
    avatar: "htttps://urlToavatar.com"
  };

  try {
    await createUser(userData);
    await createUser(userData);
  } catch (error) {
    expect(error.message).toBe("User with this e-mail already exists");
  }
});

test("can update user", async () => {
  const [user] = await getUsers();

  let newUser = {
    ...user,
    email: "newemail@gmail.com",
    lastName: "Jim",
    firstName: "Smith",
    avatar: "pretty avatar"
  };

  await updateUser({
    ...newUser
  });

  let updated = await getUserById(user.id);

  expect(updated.email).toBe(newUser.email);
  expect(updated.lastName).toBe(newUser.lastName);
  expect(updated.firstName).toBe(newUser.firstName);
  expect(updated.avatar).toBe(newUser.avatar);
});

test("can delete user", async () => {
  const [user] = await getUsers();

  let deleted = deleteUserById(user.id);

  let users = await getUsers();
  let userExists = users.filter(item => item.id === deleted.id).length;

  expect(userExists).toBe(0);
});
