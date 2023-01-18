import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    height: '100%'
  },
  appbar: {
    background: '#99b27f',
    height: '6vh'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}));