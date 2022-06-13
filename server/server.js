const express = require('express');
const app = express();
const cors = require('cors');
// const userRoutes = require('./routes/User')
const mongoose = require('mongoose')
const db = require('./config/connection');
const userRoutes = require("./routes/UserRroute")

const http = require("http");
const {Server} = require("socket.io");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use('/users', userRoutes)
require('./config/connection')
require("dotenv").config();

app.use("/api/auth",userRoutes)


const server = http.createServer(app);

const PORT = 5000;
const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
});



io.on("connection", (socket) => {
  console.log(` User Connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log("Disconnected", socket.id)
  })
})





// app.get('/', (reg, res) => {
//     res.send('Messaging App')
// })




server.listen(5000, ()=> {
    console.log(`Now listening on port: ${PORT}`)
});

// db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`Now listening on port: ${PORT}!`);
//     });
//   });


