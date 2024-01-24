import React from 'react';
import { Box, Stack, Divider, Grid } from '@mui/material';

function MuiGrid() {
  return (
    <Grid container rowSpacing={1} columnSpacing={3}>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={'primary.light'} padding={2} border={'1px solid'}  >text 1</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={'primary.light'} padding={2} border={'1px solid'}  >text 2</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={'primary.light'} padding={2} border={'1px solid'}  >text 3</Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box bgcolor={'primary.light'} padding={2} border={'1px solid'}  >text 3</Box>
      </Grid>
    </Grid>
  );
}

export default MuiGrid;
