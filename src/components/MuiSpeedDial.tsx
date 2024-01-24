import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import TelegramIcon from '@mui/icons-material/Telegram';
import DownloadIcon from '@mui/icons-material/Download';

function MuiSpeedDial() {
  return (
    <SpeedDial
      ariaLabel='SpeedDial basic example'
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<SpeedDialIcon />}
    >
      <SpeedDialAction icon={<TelegramIcon />} tooltipTitle='Telegram' />
      <SpeedDialAction icon={<DownloadIcon />} tooltipTitle='Download' />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' />
    </SpeedDial>
  );
}

export default MuiSpeedDial;
