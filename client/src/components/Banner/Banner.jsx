import { AppBar, Typography, Toolbar } from '@material-ui/core';

import useStyles from './styles';


function Banner() {
  const classes = useStyles();

  return (
    <AppBar elevation={0} className={classes.appbar} position='static'>
      <Toolbar>
        <Typography gutterBottom variant='h3' >
          MeetInn
        </Typography>
      </Toolbar>
    </AppBar>

  )
}

export default Banner;