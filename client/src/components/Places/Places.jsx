// import { Grid } from '@material-ui/core'

// import useStyles from './styles'


// function Places() {
//   const classes = useStyles();

//   const mockData = [1,2,3,4,5,6]

//   return (
//     <div className={classes.container}>
//       <Grid container>
//         {mockData?.map((number) => (
//           <Grid item xs={12}>
//             {number}
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   )
// }

// export default Places;

import { Grid, Typography, IconButton, Paper, ListItemAvatar, Avatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ListItemButton from '@material-ui/core/ListItemButton';
import Divider from '@material-ui/core/Divider';
import AddIcon from '@material-ui/icons/Add';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import LocalBarIcon from '@material-ui/icons/LocalBar';
// import Rating from '@material-ui/lab/Rating';


import useStyles from './styles';


function Places({ places, addToList, isOnList, removeFromList }) {
  const classes = useStyles();

  return (

    <Paper style={{ maxHeight: '70vh', overflow: 'auto'}}>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {places?.map((place, i) =>
          <>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place?.photos[0]?.photo_reference}&key=AIzaSyDSIQ1d7mi0UkmqcOVJICPOh43Oa-i1byc`} />
            </ListItemAvatar>
            <ListItemText
              primary={place.name}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {place.rating}
                  </Typography>
                </>
              }
            />
            {!isOnList(place) ?

              <IconButton

                onClick={() => {
                  addToList({name: place.name, photo: place.photos[0].photo_reference, rating: place.rating, coordinates: `${place.geometry.location.lat},${place.geometry.location.lng}`})
                  console.log(place)
                }}
              >
                <AddIcon style={{color: '#99b27f'}}/>
                <LocalBarIcon />
              </IconButton> :
              <IconButton
                onClick={() => {
                  console.log('test')
                  removeFromList({name: place.name})
                }}
              >

                <RemoveCircleIcon />
              </IconButton>
            }
          </ListItem>
          <Divider variant="inset" component="li" />
          </>
        )}
      </List>
    </Paper>
  )
}

export default Places;
