import GoogleMapReact from 'google-map-react';
import { Typography, Paper } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


import useStyles from './styles'


function Map({ centre, setCentre, places }) {
  const classes = useStyles();

  const defaultProps = {
    centre: {
      lat: 51.575802328718375,
      lng: 0.18283138525078574
    },
    zoom: 15
  }
  // console.log(places[0].photos[0].photo_reference)
  // console.log(places.data.results[0].geometry.location)
  //TODO: Add key to ENV file

  return (
    <div className={classes.container}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD2puGPtJBCXGtB1QgL7Fhh_VMALg_InmY' }}
        defaultCenter={defaultProps.centre}
        defaultZoom={defaultProps.zoom}
        center={defaultProps.centre}
        onChange={(event) => {
          console.log(event.center);
          setCentre(event.center)
        }}
      >
        {/* {places?.map((place, i) =>
          <Typography lat={place.geometry.location.lat} lng={place.geometry.location.lng}>
            {place.name}
          </Typography>
        )} */}

        {places?.map((place, i) =>
            <Card lat={place.geometry.location.lat} lng={place.geometry.location.lng} style={{display: 'inline-block', width:'100px'}} sx={{ maxWidth: 40 }}>
            <CardMedia
              style={{ height: '60px'}}
              component="img"
              height="140"
              image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=AIzaSyDSIQ1d7mi0UkmqcOVJICPOh43Oa-i1byc`}
            />
            <CardContent
              style={{ height: '20px'}}
            >
              <Typography variant="subtitle2" component="div">
                {place.name}
              </Typography>
            </CardContent>

          </Card>
        )}

      </GoogleMapReact>

    </div>



      // <h1 className={classes.container}>
      //   Hello, Map!
      // </h1>
  )
}

export default Map;