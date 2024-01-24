import React from 'react';
import { Box, Stack, Divider } from '@mui/material';

function MuiBox() {
  return (
    <Stack
      sx={{ border: '2px solid' }}
      spacing={4}
      direction={'row'}
      divider={<Divider orientation='vertical' flexItem/>}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
          },
        }}
      >
        text
      </Box>
      <Box
        display={'flex'}
        height={'100px'}
        width={'100px'}
        bgcolor={'success.light'}
        padding={2}
      >
        text 2
      </Box>
    </Stack>
  );
}

export default MuiBox;
