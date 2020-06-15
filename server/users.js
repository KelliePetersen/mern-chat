const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find(user => user.name === name && user.room === room);
  if (existingUser) {
    return { error: 'This username is already taken.' }
  }
  const user = { id, name, room };
  users.push(user);
  return user;
}

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index >= 0) {
    return users.splice(index, 1)[0];
  }
}

const getUser = id => {
  return users.find(user => user.id === id);
}

const getUsersInRoom = () => {

}