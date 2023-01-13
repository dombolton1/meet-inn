import React, { useState, useEffect } from 'react';

import { Grid, Toolbar, AppBar, Typography } from '@material-ui/core';

import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Places from './components/Places/Places';
import Map from './components/Map/Map';

import { getPlaceByRadius } from './services/api'

function App() {
  const [centre, setCentre] = useState({});
  const [places, setPlaces] = useState([]);
  const [list, setList] = useState([]);

  console.log(centre)
  // useEffect((() => {
    //   getPlaceByRadius('51.575802328718375,0.18283138525078574')
    //     .then((data) => {
      //       // console.log(data);
  //       setPlaces(data.data.results);
  //     })
  // }), [centre]);

  useEffect((() => {
    getPlaceByRadius(`${centre.lat},${centre.lng}`)
    .then((data) => {
      // console.log(data);
      setPlaces(data.data.results);
    })
  }), [centre]);

  //list will first try to setList[data from db]
  //for now, just use locally

  useEffect((() => {

  }))

  return (
    <>
      <Banner />
      <Grid container spacing={2} style={{ width: '100%' }}>
        <Grid item xs={12} md={8}>
          <Map
            centre={centre}
            setCentre={setCentre}
            places={places}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Places
            places={places}
            list={list}
          />
        </Grid>
      </Grid>
      <Footer
        list={list}
      />
    </>
  );
}

export default App;
