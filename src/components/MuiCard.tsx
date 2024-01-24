import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

function MuiCard() {
  return (
    <Box width={300}>
      <Card>
        <CardMedia
          component={'img'}
          height={160}
          image='https://media.4-paws.org/a/5/3/7/a537f08d227326121b80790ba54036498668c9c8/VIER%20PFOTEN_2016-07-08_011-4993x3455-1920x1329.jpg'
          alt='cat image'
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component={'div'}
          >
            React
          </Typography>

          <Typography
            variant='body2'
            color={'text.secondary'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id itaque,
            provident necessitatibus enim recusandae
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='medium'>Share</Button>
          <Button size='medium'>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
