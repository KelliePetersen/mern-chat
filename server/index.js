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
    console.log('connected');
  })
  socket.on('disconnect', () => {
    console.log('disconnected');
  })
});

app.use(router);

server.listen(PORT, () => {
  console.log('this is working');
});