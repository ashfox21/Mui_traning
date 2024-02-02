import React from 'react';
import { Box, Stack } from '@mui/material';

function MuiResponsitive() {
  return (
    <Stack spacing={2}>
      <Box
        sx={{
          height: '100px',
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor: 'secondary.main',
        }}
      ></Box>

      <Box
        sx={{
          height: '100px',
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor: 'secondary.light',
        }}
      ></Box>

<Box
        sx={{
          height: '100px',
          width: {
            xs: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor: 'secondary.dark',
        }}
      ></Box>
    </Stack>
  );
}

export default MuiResponsitive;
