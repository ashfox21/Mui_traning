import React from 'react';
import { Stack, Rating, Box } from '@mui/material';
import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MuiRating() {
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });

  const handleChangeRating = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Box>
        <Rating
          value={value}
          onChange={handleChangeRating}
          size='medium'
        />
      </Box>
      <Box>
        <Rating
          value={value}
          onChange={handleChangeRating}
          size='large'
          precision={0.5}
          readOnly
        />
      </Box>
      <Box>
        <Rating
          value={value}
          onChange={handleChangeRating}
          size='medium'
          precision={0.5}
          icon={<FavoriteIcon fontSize='inherit' color='secondary'/>}
          emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
        />
      </Box>
    </Stack>
  );
}

export default MuiRating;
