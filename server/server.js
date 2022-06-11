const express = require('express');
const app = express();
const cors = require('cors');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const server = require('http').createServer(app);
const PORT = 3000;
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3001",
      methods: ["GET", "POST"],
    },
});





app.get('/', (reg, res) => {
    res.send('Messaging App')
})


server.listen(PORT, ()=> {
    console.log(`Now listening on port: ${PORT}`)
});