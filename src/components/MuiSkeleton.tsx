import React from 'react';
import { Skeleton, Stack, Box, Avatar, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

function MuiSkeleton() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  
  return (
    <Box sx={{ width: '250px' }}>
      {loading ? (
        <Skeleton
          variant='rectangular'
          width={250}
          height={144}
          animation='pulse'
        />
      ) : (
        <img
          src='https://i0.wp.com/thediscerningcat.com/wp-content/uploads/2021/08/napoleon-cat.jpg'
          alt='skeleton'
          width={250}
          height={144}
        />
      )}
      <Stack
        direction={'row'}
        spacing={1}
        width={'100%'}
        sx={{
          marginTop: '12px',
        }}
      >
        {loading ? (
          <Skeleton
            variant='circular'
            width={40}
            height={40}
            animation='pulse'
          />
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack width={'80%'}>
          {loading ? (
            <>
              <Typography variant='body1'>
                <Skeleton variant='text' width={'100%'} animation='pulse' />
              </Typography>
              <Typography variant='body2'>
                <Skeleton variant='text' width={'100%'} animation='pulse' />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant='body1'>React MUI tutorial</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

export default MuiSkeleton;
