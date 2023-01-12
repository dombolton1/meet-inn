import { Grid, Toolbar, AppBar, Typography } from '@material-ui/core';

import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Places from './components/Places/Places';
import Map from './components/Map/Map';


function App() {
  return (
    <>
      <Banner />
      <Grid container spacing={2} style={{ width: '100%' }}>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
        <Grid item xs={12} md={4}>
          <Places />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default App;
