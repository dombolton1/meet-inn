import React, { useState, useEffect } from 'react';

import { Grid, CssBaseline } from '@material-ui/core';

import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Places from './components/Places/Places';
import Map from './components/Map/Map';
import Listpage from './components/Listpage/Listpage';

import { getPlaceByRadius } from './services/api'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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

    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function saveList (currentList) {
    const data = JSON.stringify(currentList);

    fetch('http://localhost:3001/list', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })

    fetch('http://localhost:3001/list', {
      method: 'PUT',
      body: data,
      headers: { 'Content-Type': 'application/json'}
    })
  }

  const getSavedList = async () => {
    try {
      const response = await fetch('http://localhost:3001/list');
      if (!response.ok) {
        throw new Error(
          `HTTP error: ${response.status}`
        )
      }
      let data = await response.json();
      if(data.length > 0) setList(data[0].list)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSavedList()
  }, [])

  function deleteList () {
    fetch('http://localhost:3001/list', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    setList([])
  }


  useEffect((() => {
    getPlaceByRadius(`${centre.lat},${centre.lng}`)
    .then((data) => {
      console.log(data);
      setPlaces(data.data.results);
    })
  }), [centre]);

  //list will first try to setList[data from db]
  //for now, just use locally

  return (
    <Router>

    <>
      <CssBaseline/>
      <Banner />
      <Switch>
        <Route exact path='/'>
          <Grid container spacing={2} style={{ width: '100%' }}>
            <Grid item xs={12} md={8}>
              <Map
                centre={centre}
                setCentre={setCentre}
                places={places}
                list={list}
                isOnList={isOnList}
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
            deleteList={deleteList}
          />
        </Route>
        <Route path='/list'>
          <Listpage
            list={list}
            removeFromList={removeFromList}
          />
        </Route>
      </Switch>
    </>
    </Router>
  );
}

export default App;
