//Places api stored here...

import axios from 'axios';

  //TODO: Add key to ENV file


// export const getPlaceByRadius = async (centre) => {
//   const URL = 'http://localhost:3001/51.575802328718375,0.18283138525078574';

//   try {
//     const data = await axios.get(URL, {})

//     return data;
//   } catch (error) {
//     console.log('getPlaceByRadius function error: ', error)
//   }
// }
export const getPlaceByRadius = async (centre) => {
  const URL = 'http://localhost:3001/' + centre;

  try {
    const data = await axios.get(URL, {})

    return data;
  } catch (error) {
    console.log('getPlaceByRadius function error: ', error)
  }
}