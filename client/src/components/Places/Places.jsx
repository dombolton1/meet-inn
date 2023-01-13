import { Grid } from '@material-ui/core'

import useStyles from './styles'


function Places() {
  const classes = useStyles();

  const mockData = [1,2,3,4,5,6]

  return (
    <div className={classes.container}>
      <Grid container>
        {mockData?.map((number) => (
          <Grid item xs={12}>
            {number}
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Places;