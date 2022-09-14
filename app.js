const express = require('express');
const path = require('path')
const {MongoClient, ServerApiVersion} = require('mongodb')
require('dotenv').config()
const db = require('./config/connection')


const app = express();
const routes = require('./routes')




app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.use(routes)



// app.get('/api/', (req, res) => {
//     client.connect( err => {
//         const collection =   client.db("resume").collection("routes");
//         collection.find().toArray((error, documents) => {
//             if(error){
//                 throw error;
//             }       
//             res.send(documents);
//         });
//     });
//     // client.close();
// });

// app.get('/api/projects', (req, res) => {
//     client.connect( err => {
//         const collection =   client.db("test").collection("projects");
//         collection.find().toArray((error, documents) => {
//             if(error){
//                 throw error;
//             }       
//             res.send(documents);
//         });
//     });
//     // client.close();
// });

// app.post('/api/projects', (req, res) => {
//     client.connect(err => {
//         const collection = client.db("test").collection("projects");
//         collection.insertOne(req.body, (error, result) => {
//             if(error){
//                 throw error;
//             }
//             res.send('Project added')
//         });
//     });
//     // client.close()
// });


// app.get('/api/experience', (req, res) => {
//     client.connect(err => {
//         const collection = client.db("resume").collection("experience");
//         collection.find().toArray((error, documents) => {
//             if(error){
//                 throw error;
//             }
//             res.send(documents);
//         });
//     });
// });



app.listen(5000, () => {
    console.log("Howdy, friend. We're listening on 5000")
})

module.exports = app