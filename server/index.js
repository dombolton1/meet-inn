const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config()

const app = express();

app.use(cors());
app.use(express.json());

const { List } = require('./schema');


app.get('/', async (req, res) => {
  return res.json({message: 'Server home.'})
});


//GET for places within 1500m of location
app.get('/places/:location', (req, res) => {
  fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='
    + req.params.location
    + `&radius=1500&type=bar&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`)
      .then((response) => response.json())
      .then((response) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(response);
      });
})


app.get('/list', async (req, res) => {
  const savedList = await List.find();
  return res.status(200).json(savedList);
});

app.delete('/list', async (req, res) => {
  List.deleteMany({}, (err) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send('All data cleared');
  })
})

app.put('/list', async (req, res) => {
  try {
    List.deleteMany([]);
    const newList= new List({list: req.body});
    const insertedList = await newList.save();

    return res.status(201).json(insertedList);
  } catch (error) {
    return res.status(500).send(error);
  }
})




const PORT = 3001;
const DB = 'meetinntest'


const start = async () => {
  try {
    await mongoose.connect(
      `mongodb://localhost:27017/${DB}`, { useNewUrlParser: true, useUnifiedTopology: true }
    );
    app.listen(PORT, () => {
      console.log(`Server running: http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

start();