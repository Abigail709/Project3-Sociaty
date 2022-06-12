// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_Username}:${process.env.DB_Password}@cluster0.5lnqrac.mongodb.net/MessagingApp?retryWrites=true&w=majority`, ()=> {
//     console.log('MoongoDB connected')
// })

const { connect, connection } = require('mongoose');

connect('mongodb://localhost/Chat-App', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}).then(()=> {
    console.log('MoongoDB connected')
})

module.exports = connection;