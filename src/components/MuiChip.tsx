import { Stack, Chip, Avatar } from '@mui/material';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import { useState } from 'react';

function MuiChip() {
  const [chips, setChips] = useState(['chip 1', 'chip 2', 'chip 3']);

  const handleDelete = (chip: string) => {
    setChips(chips.filter((el) => el !== chip));
  };
  return (
    <Stack spacing={4}>
      <Stack
        direction={'row'}
        spacing={1}
        p={5}
      >
        <Chip
          label='Chip'
          color='primary'
          size='small'
        />
        <Chip
          label='Chip outlined'
          color='secondary'
          size='small'
          variant='outlined'
        />
        <Chip
          label='Chip avatar'
          color='secondary'
          size='small'
          variant='outlined'
          avatar={<Avatar>SW</Avatar>}
        />
        <Chip
          label='Chip image avatar'
          color='success'
          size='small'
          variant='outlined'
          avatar={
            <Avatar src='https://media.istockphoto.com/id/1361394182/nl/foto/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=nK-fnig7XiKZSW5tQu5HWJpLfsMLU4xT87QSV9DkAV0=' />
          }
        />
        <Chip
          label='Chip with icon'
          color='primary'
          size='small'
          icon={<SentimentSatisfiedIcon />}
        />
        <Chip
          label='Delete'
          color='error'
          size='small'
          icon={<SentimentSatisfiedIcon />}
        />
      </Stack>

      <Stack
        direction={'row'}
        spacing={1}
        p={5}
      >
        {chips.map((el) => (
          <Chip
            key={el}
            label={el}
            color='success'
            size='small'
            variant='outlined'
            onDelete={() => handleDelete(el)}
          />
        ))}
      </Stack>
    </Stack>
  );
}

export default MuiChip;
