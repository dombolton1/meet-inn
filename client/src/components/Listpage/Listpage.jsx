import { Typography, List, ListItem, Divider, ListItemText, Paper, ListSubheader, Button } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';



function Listpage({ list, removeFromList }) {

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>

    <Paper style={{ width: '35vw', overflow: 'auto', marginTop: '80px', display: 'flex', justifyContent: 'center'}}>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} subheader={<ListSubheader style={{marginTop: '30px', marginBottom: '20px'}} component='div'><Typography variant='h4'>My List</Typography></ListSubheader>}>
          {list?.map((place, i) =>
          <>
            <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">

            <ListItemText
              primary={
                <Typography
                sx={{ display: 'inline' }}
                  variant='h6'
                  gutterBottom
                  >
                  {place.name}
                </Typography>
              }
              secondary={
                <Rating value={place.rating} readOnly></Rating>

              }
            />
            <Button
            size="small"
            style={{marginLeft:'20px'}}
            onClick={() => {
              removeFromList({name: place.name})
            }}
          >
            Remove from List
          </Button>
            </ListItem>
          </>
          )}
            </List>
            </Paper>
    </div>



  )
}

export default Listpage;