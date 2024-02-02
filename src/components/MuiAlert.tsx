import React from 'react';
import { Alert, AlertTitle, Stack } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Alert severity='warning'>This is an warning alert</Alert>
      <Alert severity='error'>This is an error alert</Alert>
      <Alert severity='success'>This is an success alert</Alert>
      <Alert severity='info'>This is an info alert</Alert>

      <Alert variant='outlined' severity='warning'>
        This is an warning alert
      </Alert>
      <Alert variant='outlined' severity='error'>
        This is an error alert
      </Alert>
      <Alert variant='outlined' severity='success'>
        This is an success alert
      </Alert>
      <Alert variant='outlined' severity='info'>
        This is an info alert
      </Alert>

      <Alert variant='filled' severity='warning'>
        <AlertTitle> Warning </AlertTitle>
        This is an warning alert
      </Alert>

      <Alert variant='filled' severity='error'>
        <AlertTitle> Error </AlertTitle>
        This is an error alert
      </Alert>

      <Alert
        variant='filled'
        severity='success'
        icon={<CheckIcon />}
        onClose={() => alert('close')}
      >
        <AlertTitle> Success </AlertTitle>
        This is an success alert
      </Alert>

      <Alert variant='filled' severity='info'>
        <AlertTitle> Info </AlertTitle>
        This is an info alert
      </Alert>
    </Stack>
  );
}

export default MuiAlert;
