import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function MuiBreadCrumps() {
  return (
    <Box m={2}>
      <Breadcrumbs aria-label='breadcrumps' separator={<NavigateNextIcon />}>
        <Link
          underline='hover'
          href='#'
        >
          Home
        </Link>
        <Link
          underline='hover'
          href='#'
        >
          Catalog
        </Link>
        <Link
          underline='hover'
          href='#'
        >
          Accessories
        </Link>
        <Typography color={'text.primary'}>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default MuiBreadCrumps;
