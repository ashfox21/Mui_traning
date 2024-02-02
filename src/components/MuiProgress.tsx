import React, { useState, useEffect } from 'react';
import { Stack, CircularProgress, LinearProgress } from '@mui/material';

function MuiProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color='success' />
      <CircularProgress variant='determinate' value={progress} />

      <LinearProgress />
      <LinearProgress color='secondary' />
      <LinearProgress variant='determinate' value={progress} />
    </Stack>
  );
}

export default MuiProgress;
