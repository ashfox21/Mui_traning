import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Stack,
  Avatar,
  ListItemButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MuiList() {
  return (
    <Stack p={4}>
      <Box
        sx={{
          width: '400px',
          bgcolor: '#efefef',
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <FavoriteIcon fontSize='small' />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                primary='List item 1'
                secondary='Secondary text'
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <FavoriteIcon fontSize='small' />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary='List item 2'
              secondary='Secondary text'
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <ListItemAvatar>
                <Avatar>
                  <FavoriteIcon fontSize='small' />
                </Avatar>
              </ListItemAvatar>
            </ListItemIcon>
            <ListItemText
              primary='List item 3'
              secondary='Secondary text'
            />
          </ListItem>
        </List>
      </Box>
    </Stack>
  );
}

export default MuiList;
