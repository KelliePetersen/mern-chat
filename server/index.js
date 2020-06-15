const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const PORT = process.env.PORT || 5000;

io.on('connection', socket => {
  socket.on('join', ({ name, room }, cb) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    if (error) return cb(error);
    socket.emit('message', { user: 'admin', text: `Welcome to ${user.room}, ${user.name}.`});
    socket.broadcast.to(user.room).emit('message', { 
      user: 'admin', 
      text: `${user.name} has joined ${user.room}. Welcome ${user.name}.`
    })
    socket.join(user.room);
  })
  socket.on('disconnect', () => {
    console.log('disconnected');
  })
});

app.use(router);

server.listen(PORT, () => {
  console.log('this is working');
});