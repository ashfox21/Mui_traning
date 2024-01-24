import { Drawer, Box, Typography, IconButton } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

function MuiDrower() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton size='large' edge='start' color='inherit' onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          p={2}
          width={250}
          textAlign={'center'}
          role='presentation'
        >
          <Typography
            variant='h6'
            component={'div'}
          >
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}

export default MuiDrower;
