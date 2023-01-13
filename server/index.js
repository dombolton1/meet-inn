const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

//TODO: schema

app.get('/', async (req, res) => {
  return res.json({message: 'Server home.'})
});

//GET for places within 1500m of location
app.get('/:location', (req, res) => {
  fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='
    + req.params.location
    + '&radius=1500&type=bar&key=AIzaSyAotUjPUft8ESH3BvLpb-7vK04YUJV90zQ')
      .then((response) => response.json())
      .then((response) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.send(response);
      });
})

//TODO: POST & GET endpoints for crawl list


const PORT = 3001;
// const db =

//TODO: start mongoose database with express server

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})