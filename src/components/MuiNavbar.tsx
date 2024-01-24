import React from 'react';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MuiDrower from './MuiDrower';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import { useState } from 'react';
import App from '../App';

function MuiNavbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClouse = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position='static'>
      <Toolbar>
        <MuiDrower />
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='logo'
        >
          <CatchingPokemonIcon />
        </IconButton>
        <Typography
          variant='h6'
          component={'div'}
          sx={{ flexGrow: 1 }}
        >
          POKEMONAPP
        </Typography>
        <Stack
          direction={'row'}
          spacing={2}
        >
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClick}
            aria-control={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDownIcon />}
          >
            Resources
          </Button>
          <Button color='inherit'>Login</Button>
        </Stack>
        <Menu
          id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          onClose={handleClouse}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box width={150}>
            <MenuItem onClick={handleClouse}>Blog</MenuItem>
            <MenuItem onClick={handleClouse}>Podcast</MenuItem>
          </Box>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default MuiNavbar;
