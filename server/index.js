const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// installed dotenv
require('dotenv').config()
console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY)

const app = express();

app.use(cors());
app.use(express.json());

const { List } = require('./schema');

//TODO: schema

app.get('/', async (req, res) => {
  return res.json({message: 'Server home.'})
});

//GET for places within 1500m of location
app.get('/:location', (req, res) => {
  fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='
    + req.params.location
    + `&radius=1500&type=bar&key=AIzaSyD2puGPtJBCXGtB1QgL7Fhh_VMALg_InmY`)
      .then((response) => response.json())
      .then((response) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(response);
      });
})

//TODO: POST & GET endpoints for crawl list

app.put('/list', async (req, res) => {
  try {
    List.deleteMany({});
    const newList= new List(req.body);
    const insertedList = await newList.save();

    return res.status(201).json(insertedList);
  } catch (error) {
    return res.status(500).send(error);
  }
})

app.get('/list', async (req, res) => {
  const list = await List.find();

  return res.status(200).json(list);
})


const PORT = 3001;
// const DB = 'meetinntest'

//TODO: start mongoose database with express server

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

// const start = async () => {
//   try {
//     await mongoose.connect(
//       `mongodb://localhost:27017/${DB}`, { useNewUrlParser: true, useUnifiedTopology: true }
//     );
//     app.listen(PORT, () => {
//       console.log(`Server running: http://localhost:${PORT}/`)
//     })
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// }