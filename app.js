const express = require('express');
const {MongoClient, ServerApiVersion} = require('mongodb')
require('dotenv').config()
const uri = `mongodb+srv://yohuck:D0fRKJANW7OkUdw6@api-portfolio.9w4o8fc.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const app = express();




app.use(express.json());

app.get('/', (req, res) => {
    res.send('Howdy, friend!');
});

app.get('/api/projects',  async (req, res) => {
    client.connect( err => {
        const collection =   client.db("test").collection("projects");
        collection.find().toArray((error, documents) => {
            if(error){
                throw error;
            }       
            res.send(documents)
           
        })
  
        // perform actions on the collection object
   
      });
     client.close();
});



app.get('/api/projectos', (req, res) => {
    client.connect(err => {
        const collection = client.db("test").collection("projects");
        collection.find().toArray((error, documents) => {
            if(error){
                throw error;
            }
            res.send(documents);
            client.close()
        });
    });
});

app.get('/api/experience', (req, res) => {
    client.connect(err => {
        const collection = client.db("resume").collection("experience");
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
        const collection = client.db("test").collection("devices");
        collection.insertOne(req.body, (error, result) => {
            if(error){
                throw error;
            }
            res.send('maybe?')
            client.close()
        });
    });
});

app.listen(5000, () => {
    console.log("Howdy, friend. We're listening on 3000")
})

module.exports = app