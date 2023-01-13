import GoogleMapReact from 'google-map-react';
import { Typography } from '@material-ui/core';


import useStyles from './styles'


function Map() {
  const classes = useStyles();

  const defaultProps = {
    centre: {
      lat: 0,
      lng: 0
    },
    zoom: 12
  }

  return (
    <div className={classes.container}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDSIQ1d7mi0UkmqcOVJICPOh43Oa-i1byc' }}
        defaultCenter={defaultProps.centre}
        defaultZoom={defaultProps.zoom}
        center={defaultProps.centre}
        onChange={(event) => {
          console.log(event);

        }}
      >
        <Typography
          lat={0}
          lng={0}
        >
          Testing!
        </Typography>
      </GoogleMapReact>

    </div>

      // <h1 className={classes.container}>
      //   Hello, Map!
      // </h1>
  )
}

export default Map;