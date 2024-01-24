import { Link, Stack, Typography } from '@mui/material';

function MuiLink() {
  return (
    <Stack
      spacing={2}
      direction={'row'}
      m={4}
    >
      <Link href='#' variant='body1'>Link</Link>

      <Link
        href='#'
        color={'secondary'}
        underline='hover'
      >
        Secondary
      </Link>

      <Typography variant='h6'>
        <Link
          href='#'
          color={'secondary'}
          underline='hover'
        >
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
}

export default MuiLink;
