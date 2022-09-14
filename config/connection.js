const {connect, connection} = require('mongoose')
require('dotenv').config()


const uri = `mongodb+srv://yohuck:${process.env.API_PASSWORD}@api-portfolio.9w4o8fc.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



const connectionString = uri || 'mongodb://127.0.0.1:27017/resume';

connect(connectionString, {
    useNewURLParser: true,
    useUnifiedTopology:true,
});

module.exports = connection