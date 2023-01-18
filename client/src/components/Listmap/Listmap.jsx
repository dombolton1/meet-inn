// import GoogleMapReact from 'google-map-react';
// import { Typography, Paper, Button, Modal, Box, IconButton } from '@material-ui/core';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import LocalBarIcon from '@material-ui/icons/LocalBar';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';



// import { useState } from 'react';


// import useStyles from './styles'


// function Map({ centre, setCentre,  list, isOnList, places }) {
//   const classes = useStyles();

//   const defaultProps = {
//     centre: {
//       lat: 51.575802328718375,
//       lng: 0.18283138525078574
//     },
//     zoom: 15
//   }

//   function splitCoords(coords, direction) {
//     const split = coords.split(',');
//     if (direction === 'lat') return Number(split[0]);
//     if (direction === 'lng') return Number(split[1]);
//   }

//   const [open, setOpen] = useState(false);
//   const [selectedPlace, setSelectedPlace] = useState(places[0]);
//   const handleOpen = (place) => {
//     setSelectedPlace(place)
//     setOpen(true);
//   }
//   const handleClose = () => setOpen(false);
//   const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };


//   return (
//     <div className={classes.container}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
//         defaultCenter={defaultProps.centre}
//         defaultZoom={defaultProps.zoom}
//         center={defaultProps.centre}
//       >
//         {list?.map((place, i) =>
//           <div lat={splitCoords(place.coordinates, 'lat')} lng={splitCoords(place.coordinates, 'lng')}>
//               <IconButton style={{color: 'black', border: 'solid', color: 'green', background: 'white', opacity: '0.8'}} onClick={() => handleOpen(place)}>
//               <CheckCircleIcon />
//             </IconButton> :
//         </div>
//         )}
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={style}>
//               <Card  sx={style} >
//                 <CardMedia
//                   style={{ height: '60px'}}
//                   component="img"
//                   height="140"
//                   image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${selectedPlace?.photos[0]?.photo_reference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
//                 />
//                 <CardContent
//                   style={{ height: '20px'}}
//                 >
//                   <Typography variant="subtitle2" component="div">
//                     {selectedPlace?.name}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Box>
//           </Modal>
//       </GoogleMapReact>

//     </div>

//   )
// }

// export default Map;