import GoogleMapReact from 'google-map-react';
import { Typography, Paper, Button, Modal, Box, IconButton } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LocalBarIcon from '@material-ui/icons/LocalBar';



import { useState } from 'react';


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

  const [open, setOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(places[0]);
  const handleOpen = (place) => {
    setSelectedPlace(place)
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  return (
    <div className={classes.container}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyD2puGPtJBCXGtB1QgL7Fhh_VMALg_InmY' }}
        defaultCenter={defaultProps.centre}
        defaultZoom={defaultProps.zoom}
        center={defaultProps.centre}
        onChange={(event) => {
          // console.log(event.center);
          setCentre(event.center)
        }}
      >
        {places?.map((place, i) =>
          <div lat={place.geometry.location.lat} lng={place.geometry.location.lng}>

          <IconButton style={{color: 'black', border: 'solid', background:'#99b27f', opacity: '0.5'}} onClick={() => handleOpen(place)}>
            <LocalBarIcon />
          </IconButton>

        </div>
        )}
<Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>

              <Card  sx={style} >
                <CardMedia
                  style={{ height: '60px'}}
                  component="img"
                  height="140"
                  image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${selectedPlace?.photos[0]?.photo_reference}&key=AIzaSyDSIQ1d7mi0UkmqcOVJICPOh43Oa-i1byc`}
                />
                <CardContent
                  style={{ height: '20px'}}
                >
                  <Typography variant="subtitle2" component="div">
                    {selectedPlace?.name}
                  </Typography>
                </CardContent>

              </Card>
            </Box>
          </Modal>
      </GoogleMapReact>

    </div>

  )
}

export default Map;



{/*
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
        )} */}