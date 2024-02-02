import React from 'react';
import { Snackbar, Button, Alert, AlertProps } from '@mui/material';
import { useState, forwardRef } from 'react';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props}/>
  }
)

function MuiSnackBar() {
  const [open, setOpen] = useState(false);
  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button variant='contained' onClick={() => setOpen(true)}>
        Submit
      </Button>
      {/* <Snackbar
        message='Form submitted succesfully!'
        autoHideDuration={2000}
        open={open}
        onClose={handleClose}
      /> */}
      <Snackbar open={open} onClose={handleClose} autoHideDuration={4000}>
        <SnackbarAlert severity='success'>
          Form submitted succesfully!
        </SnackbarAlert>
      </Snackbar>
    </>
  );
}

export default MuiSnackBar;
