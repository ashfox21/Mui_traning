import React from 'react';
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import { useState, useEffect } from 'react';

function MuiLoadingButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={'row'}>
        <LoadingButton loading={loading} variant='outlined' onClick={handleClick}>
          Submit
        </LoadingButton>
      </Stack>

      <Stack spacing={2} direction={'row'} onClick={handleClick}>
        <LoadingButton
          loading={loading}
          variant='outlined'
          loadingIndicator='Loading...'
        >
          Fetch data
        </LoadingButton>
      </Stack>

      <Stack spacing={2} direction={'row'} onClick={handleClick}>
        <LoadingButton
          loading={loading}
          variant='outlined'
          loadingPosition='start'
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>
      </Stack>
    </Stack>
  );
}

export default MuiLoadingButton;
