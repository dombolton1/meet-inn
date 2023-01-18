import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';


import useStyles from './styles';


function Banner() {
  const classes = useStyles();

  return (
    <AppBar elevation={0} className={classes.appbar} position='static'>
      <Toolbar className={classes.toolbar}>
        <Link className={classes.link} to='/'>

          <LocalDrinkIcon  fontSize='large' />
        </Link>
        <Link className={classes.link} to='/'>

          <Typography  variant='h3' style={{marginRight: '40px', marginLeft: '10px'}} >
            MeetInn
          </Typography>
        </Link>
        <Link className={classes.link} to='/'>

          <Typography  variant='h5' style={{marginRight: '30px'}}>
            Home
          </Typography>
        </Link>
        <Link className={classes.link} to='/list'>

          <Typography  variant='h5'>
            My list
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>

  )
}

export default Banner;