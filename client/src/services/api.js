//Places api stored here...

import axios from 'axios';

export const getPlaceByRadius = async (centre) => {
  const URL = 'http://127.0.0.1:3001/testing/51.575802328718375,0.18283138525078574';

  try {
    const data = await axios.get(URL, {})

    return data;
  } catch (error) {
    console.log('getPlaceByRadius function error: ', error)
  }
}