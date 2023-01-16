//Places api stored here...

import axios from 'axios';



export const getPlaceByRadius = async (centre) => {
  const URL = 'http://localhost:3001/places/' + centre;

  try {
    const data = await axios.get(URL, {})

    return data;
  } catch (error) {
    console.log('getPlaceByRadius function error: ', error)
  }
}