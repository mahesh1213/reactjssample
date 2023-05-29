import React from 'react'
import LeftNav from './LeftNav'
import RightMain from './RightMain'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

function Main() {
  return (
    <div className='main'>
        <Grid container spacing={2}>
            <Grid item xs={3}>
             <Card className='left-menu' variant="outlined">
              <LeftNav/>
            </Card>
            </Grid>
            <Grid item xs={9}>
              <RightMain/>
            </Grid>
        </Grid>
    </div>
  )
}

export default Main
