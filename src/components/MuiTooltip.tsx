import {Tooltip, Button, Box} from '@mui/material'

function MuiTooltip() {
  return (
    <Box  p={5}>
      <Tooltip title='info about button'>
        <Button variant='contained'>
          tooltip 
        </Button>
      </Tooltip>
    </Box>
  )
}

export default MuiTooltip
