import { useState } from 'react';
import { Grid, Typography, Box, Button, Modal, List, ListItem, ListItemText, Paper, Divider } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '10vh',
  },
  media: {
    height: 100,
  },
});
function Footer({ list, removeFromList, saveList }) {


  const classes = useStyles();

  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    height: '15vh'
  };

  return(

<div>
    <Grid container style={{height: '20vh'}}>
      <Grid item style={{width:'80vw',  }}>
        <Grid container style={{overflowX: 'auto'}}>
          <List style={flexContainer}>
            {list?.map((item) =>
              <ListItem style={{width: '20vw'}}>
              <Card sx={{ maxWidth: 0}}>
        <CardMedia
          sx={{ height: 140 }}
          image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item.photo}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>

        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              removeFromList({name: item.name})
              console.log(list)
            }}
          >
            Remove from List
          </Button>
        </CardActions>
      </Card>
              </ListItem>
            )}
            {/* {list?.map((item) =>
              <ListItem style={{width: '20vw'}}>
              <Typography>{item.name}</Typography>
            </ListItem>
            )} */}
            {/* <ListItem style={{width: '20vw'}}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image=""
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamat
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </ListItem>
            <ListItem style={{width: '20vw'}}>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="http://photos.demandstudios.com/getty/article/176/159/464524381.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamat
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
            </ListItem>
            <ListItem style={{width: '20vw'}}>
              <Typography>Hello</Typography>
            </ListItem>
            <ListItem style={{width: '20vw'}}>
              <Typography>Hello</Typography>
            </ListItem>
            <ListItem style={{width: '20vw'}}>
              <Typography>Hello</Typography>
            </ListItem>
            <ListItem style={{width: '20vw'}}>
              <Typography>Hello</Typography>
            </ListItem> */}

          </List>
        </Grid>
      </Grid>
      <Grid item style={{width:'20vw'}}>
      <Button
            size="small"
            onClick={() => {
              console.log('testing button')
              console.log(list)
              saveList(list)
            }}
          >
            Save List
          </Button>

      </Grid>
    </Grid>
</div>

  )
}

//This is the original horizontal list : copy this in => also consider copying traveladv with the first grid code in this file
// <Box style={{overflow: 'auto', height: '20vh', marginTop: '10px'}}>

//   <List style={flexContainer}>
//     <ListItem>
//     <>

// {list?.map((item) =>
//   <Card className={classes.root}>
//   <CardActionArea>
//     <CardMedia
//       className={classes.media}
//       image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item?.photo}&key=AIzaSyDSIQ1d7mi0UkmqcOVJICPOh43Oa-i1byc`}
//       title="Contemplative Reptile"
//     />
//     <CardContent>
//       <Typography variant="subtitle2" component="h2">
//         {item.name}
//       </Typography>
//     </CardContent>
//   </CardActionArea>
//   <CardActions>
//     <Button size="small" color="primary">
//       Share
//     </Button>

//   </CardActions>
// </Card>
// )}
// </>
//     </ListItem>
//   </List>
// </Box>

export default Footer;