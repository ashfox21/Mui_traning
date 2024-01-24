import { Stack, Avatar } from '@mui/material';

function MuiAvatar() {
  return (
    <Stack
      spacing={4}
      p={4}
    >
      <Stack
        spacing={1}
        direction={'row'}
      >
        <Avatar
          sx={{
            bgcolor: 'primary.light',
          }}
        >
          CK
        </Avatar>
        <Avatar
          sx={{
            bgcolor: 'success.light',
          }}
        >
          BW
        </Avatar>
      </Stack>

      <Stack
        spacing={1}
        direction={'row'}
      >
        <Avatar src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/09/how-much-does-a-cat-cost.jpeg.jpg'>
          CK
        </Avatar>
        <Avatar src='https://media.istockphoto.com/id/1361394182/nl/foto/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=nK-fnig7XiKZSW5tQu5HWJpLfsMLU4xT87QSV9DkAV0='>
          BW
        </Avatar>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
