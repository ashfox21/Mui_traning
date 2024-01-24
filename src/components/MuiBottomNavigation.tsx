import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from 'react';

function MuiBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
      }}
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction
        label='Download'
        icon={<DownloadIcon />}
      />
      <BottomNavigationAction
        label='Like'
        icon={<ThumbUpIcon />}
      />
      
      <BottomNavigationAction
        label='Dislike'
        icon={<ThumbDownIcon />}
      />
      
    </BottomNavigation>
  );
}

export default MuiBottomNavigation;
