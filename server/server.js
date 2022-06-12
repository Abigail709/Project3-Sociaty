const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/User')
const mongoose = require('mongoose')
const db = require('./config/connection');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/users', userRoutes)
require('./config/connection')
require("dotenv").config();





const server = require('http').createServer(app);
const PORT = 5000;
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3001",
      methods: ["GET", "POST"],
    },
});





// app.get('/', (reg, res) => {
//     res.send('Messaging App')
// })




// server.listen(PORT, ()=> {
//     console.log(`Now listening on port: ${PORT}`)
// });

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`Now listening on port: ${PORT}!`);
    });
  });