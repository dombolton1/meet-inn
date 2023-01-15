import React, { useState, useEffect } from 'react';

import { Grid, Toolbar, AppBar, Typography, Box, CssBaseline } from '@material-ui/core';

import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Places from './components/Places/Places';
import Map from './components/Map/Map';

import { getPlaceByRadius } from './services/api'

function App() {
  const [centre, setCentre] = useState({});
  const [places, setPlaces] = useState([]);
  const [list, setList] = useState([]);

  function addToList (item) {
    if (!list.some(e => e.name === item.name)) setList([...list, item]);
  }

  function isOnList (item) {
    return (list.some(e => e.name === item.name))
  }

  function removeFromList (item) {
    let index = list.findIndex((listItem) => listItem.name === item.name);
    // console.log(index)

    // list.splice(index, 1);
    // console.log(list);
    // setList(list)
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList)
  }

  function saveList (currentList) {
    const data = JSON.stringify(currentList);

    fetch('http://localhost:3001/list', {
      method: 'PUT',
      body: data,
      headers: { 'Content-Type': 'application/json'}
    })
  }


  useEffect((() => {
    getPlaceByRadius(`${centre.lat},${centre.lng}`)
    .then((data) => {
      // console.log(data);
      setPlaces(data.data.results);
    })
  }), [centre]);

  //list will first try to setList[data from db]
  //for now, just use locally

  // useEffect((() => {
  //   setList(list)
  // }), [list])


  return (
    <>
    <CssBaseline/>
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
            addToList={addToList}
            isOnList={isOnList}
            removeFromList={removeFromList}
          />
        </Grid>
      </Grid>
      <Footer
        list={list}
        removeFromList={removeFromList}
        saveList={saveList}
      />
    </>
  );
}

export default App;
