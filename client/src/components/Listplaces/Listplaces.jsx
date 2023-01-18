

// import { Grid, Typography, IconButton, Paper, ListItemAvatar, Avatar } from '@material-ui/core';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// // import ListItemButton from '@material-ui/core/ListItemButton';
// import Divider from '@material-ui/core/Divider';
// import AddIcon from '@material-ui/icons/Add';
// import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
// import LocalBarIcon from '@material-ui/icons/LocalBar';
// import Rating from '@material-ui/lab/Rating';


// import useStyles from './styles';


// function Places({ addToList, isOnList, removeFromList }) {
//   const classes = useStyles();

//   return (

//     <Paper style={{ maxHeight: '68vh', overflow: 'auto'}}>

//       <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//         {list?.map((place, i) =>
//           <>
//           <ListItem alignItems="flex-start">
//             <ListItemAvatar style={{height: '80px', width: '90px'}}>
//               <Avatar style={{height: '70px', width: '70px'}} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place?.photo}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`} />
//             </ListItemAvatar>
//             <ListItemText
//               // primary={place.name}
//               primary={
//                 <Typography variant='h6'>
//                   {place.name}
//                 </Typography>
//               }
//               secondary={

//                 <Rating value={place.rating} readOnly></Rating>
//               }
//             />
//             {!isOnList(place) ?

//               <IconButton

//                 onClick={() => {
//                 }}
//               >
//                 <AddIcon style={{color: '#99b27f'}}/>
//                 <LocalBarIcon />
//               </IconButton> :
//               <IconButton
//                 onClick={() => {
//                   console.log('test')
//                   removeFromList({name: place.name})
//                 }}
//               >
//                 <RemoveCircleIcon />
//               </IconButton>
//             }
//           </ListItem>
//           <Divider variant="inset" component="li" />
//           </>
//         )}
//       </List>
//     </Paper>
//   )
// }

// export default Places;
