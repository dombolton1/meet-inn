import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

function Footer({ list }) {
  return(
    // <Grid container direction='row'>
    //   <Grid item xs={6}>
    //     <h1>Crawl list to go here</h1>
    //   </Grid>
    //   <Grid item xs={6}>
    //     <h1>Finalize button to go here</h1>
    //   </Grid>
    // </Grid>
    <>

    {list?.map((item) =>
      <Typography>
        {item.name}
      </Typography>
    )}
    </>


  )
}

export default Footer;