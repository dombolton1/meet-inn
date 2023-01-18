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
function Footer({ list, removeFromList, saveList, deleteList }) {


  const classes = useStyles();

  const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    height: '24vh',
    spacing: 20
  };

  return(

<div>
    <Grid container style={{marginTop: '8px'}} >
      <Grid item style={{width:'80vw',  }}>
        <Grid container style={{overflowX: 'auto'}}>
          <List style={flexContainer}>
            {list?.map((item) =>
              <ListItem style={{width: '15vw'}}>
              <Card style={{ width: '14vw', height: '22vh'}}>
        <CardMedia
          style={{ height: 140 }}
          image={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${item.photo}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
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


          </List>
        </Grid>
      </Grid>
      <Grid item style={{ width:'20vw', height: '22vh' }}>
        <Grid container style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height:'22vh'}}>
            <Grid item>

      <Button
            size='large'
            style={{ width: '12vw' }}
            variant='outlined'
            onClick={() => {
              console.log('testing button')
              console.log(list)
              saveList(list)
            }}
          >
            <Typography variant='h5'>

            Save List
            </Typography>
          </Button>
            </Grid>
            <Grid item>

      <Button
      size='large'
      style={{ backgroundColor: '#99b27f', width: '12vw' }}
            variant='contained'
            onClick={() => {
              console.log('testing delete button')
              deleteList()
            }}
          >
            <Typography variant='h5'>

              Delete List
            </Typography>
          </Button>
            </Grid>
        </Grid>

      </Grid>
    </Grid>

</div>

  )
}


export default Footer;