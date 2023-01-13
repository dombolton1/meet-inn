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

import { Grid, Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import useStyles from './styles';


function Places({ places, list }) {
  const classes = useStyles();

  const mockData = [1,2,3,4,5,6]

  return (
    // <>
    //   {places?.map((place, i) =>
    //     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}>
    //       <ListItem alignItems="flex-start">
    //         <ListItemText
    //           primary={place.name}
    //           secondary={
    //             <>
    //               <Typography
    //                 sx={{ display: 'inline' }}
    //                 component="span"
    //                 variant="body2"
    //                 color="text.primary"
    //               >
    //                 Ali Connors
    //               </Typography>
    //               {" — I'll be in your neighborhood doing errands this…"}
    //             </>
    //           }
    //         />
    //       </ListItem>
    //       <Divider variant="inset" component="li" />
    //     </List>
    //   )}
    // </>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {places?.map((place, i) =>
          <>
          <ListItem alignItems="flex-start">
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
                    Yo
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </>
              }
            />
          </ListItem>
            <Divider variant="inset" component="li" />
          </>
        )}
      </List>
  )
}

export default Places;