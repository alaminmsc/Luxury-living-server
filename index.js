const express = require('express');
const app = express();
const port = 5000;
const { MongoClient } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

const DB_USER = 'luxuryliving';
const DB_PASS = 'Luxury1Living';
const DB_NAME = 'luxurylivingDB';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



//mongoDB
const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.4zce5.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const AddService = client.db("test").collection("addService");
  
  //AddServic
  app.post('/addServices',(req,res)=> {
      const addService = req.body;
      console.log(addService);
  })
  console.log('Database is Connected...')
});



app.get('/',(req,res)=> {
    res.send('Hello Luxury Living..')
})

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`);
})