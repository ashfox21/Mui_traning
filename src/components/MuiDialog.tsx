import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

function MuiDialog() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant='outlined' onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog open={open} onClose={()=> setOpen(false)}>
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialog-description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
            laudantium dolores? Quam eos nostrum dolorem repellendus fugit
            aliquid veniam natus atque! Perspiciatis eligendi aut nam magnam
            voluptas iure sapiente aliquam!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={()=> setOpen(false)}>Cansel</Button>
          <Button variant='contained' onClick={()=> setOpen(false)}>Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default MuiDialog;
