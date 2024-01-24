import { Badge, Stack } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';

function MuiBadge() {
  return (
    <Stack spacing={2} direction={'row'} p={5}>
      <Badge badgeContent={5} color="primary">
        <FavoriteIcon />  
      </Badge>
      <Badge badgeContent={500} color="secondary">
        <FavoriteIcon />  
      </Badge>
      <Badge badgeContent={105} color="secondary" max={999}>
        <FavoriteIcon />  
      </Badge>
      <Badge variant="dot" badgeContent={105} color="secondary" max={999}>
        <FavoriteIcon />  
      </Badge>
      
    </Stack>
  )
}

export default MuiBadge
