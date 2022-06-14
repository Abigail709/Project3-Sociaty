
const { connect, connection } = require('mongoose');

connect('mongodb://localhost/Chat-App', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}).then(()=> {
    console.log('MoongoDB connected')
})

module.exports = connection;