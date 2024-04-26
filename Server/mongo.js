
const express = require("express");
const app =  express();
const port = 8000;


app.listen(port,()=>{
console.log(`app running in ${port}`)
});


app.get("/mongo",(req,res)=>{
    res.status(200)
    res.send("your on mongo route")
    console.log("/mongo")
    
    })
    
    const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/'; 
const dbName = 'students'; 
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const collection = db.collection('student_info'); 


    const newDocument = {
      name: 'John Doe',
      age: 25,
      city: 'Example City',
    };

    
    collection.insertOne(newDocument)
      .then(result => {
        console.log('Document inserted successfully:', result.insertedId);
      })
      .catch(error => {
        console.error('Error inserting document:', error);
      })
      .finally(() => {
        client.close();
      });
  })
  .catch(error => console.error('Error connecting to MongoDB:', error));

 