const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://yohuck:${process.env.API_PASSWORD}.@api-portfolio.9w4o8fc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
require('dotenv').config()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Howdy, friend!');
});

app.get('/api/projects', (req, res) => {
    client.connect(err => {
        const collection = client.db("api-portfolio").collection("test.projects");
        collection.find().toArray((error, documents) => {
            if(error){
                throw error;
            }
            res.send(documents);
        });
    });
});

app.post('/api/projects', (req, res) => {
    client.connect(err => {
        const collection = client.db("api-portfolio").collection("projects");
        collection.insertOne(req.body, (error, result) => {
            if(error){
                throw error;
            }
            res.send(result.insertedId)
        });
    });
});

app.listen(5000, () => {
    console.log("Howdy, friend. We're listening on 3000")
})

module.exports = app