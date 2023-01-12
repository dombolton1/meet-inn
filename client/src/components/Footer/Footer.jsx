import { Grid, Typography } from '@material-ui/core';


function Footer() {
  return(
    <Grid container direction='row'>
      <Grid item xs={6}>
        <h1>Crawl list to go here</h1>
      </Grid>
      <Grid item xs={6}>
        <h1>Finalize button to go here</h1>
      </Grid>
    </Grid>
  )
}

export default Footer;