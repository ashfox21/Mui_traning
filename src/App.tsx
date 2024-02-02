import MuiTypography from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import MuiGroupButtons from './components/MuiGroupButtons';
import MuiToggleButton from './components/MuiToggleButton';
import MuiTextFeild from './components/MuiTextFeild';
import MuiSelect from './components/MuiSelect';
import MuiRadioButton from './components/MuiRadioButton';
import MuiCheckbox from './components/MuiCheckbox';
import MuiSwitch from './components/MuiSwitch';
import MuiRating from './components/MuiRating';
import MuiAuthocomplete from './components/MuiAuthocomplete';
import MuiBox from './components/MuiBox';
import MuiGrid from './components/MuiGrid';
import MuiCard from './components/MuiCard';
import MuiAccordion from './components/MuiAccordion';
import MuiImageList from './components/MuiImageList';
import MuiNavbar from './components/MuiNavbar';
import MuiLink from './components/MuiLink';
import MuiBreadCrumps from './components/MuiBreadCrumps';
import MuiDrower from './components/MuiDrower';
import MuiSpeedDial from './components/MuiSpeedDial';
import MuiBottomNavigation from './components/MuiBottomNavigation';
import MuiAvatar from './components/MuiAvatar';
import MuiBadge from './components/MuiBadge';
import MuiList from './components/MuiList';
import MuiChip from './components/MuiChip';
import MuiTooltip from './components/MuiTooltip';
import MuiTable from './components/MuiTable';
import MuiAlert from './components/MuiAlert';
import MuiSnackBar from './components/MuiSnackBar';
import MuiDialog from './components/MuiDialog';
import MuiProgress from './components/MuiProgress';
import MuiSkeleton from './components/MuiSkeleton';
import MuiLoadingButton from './components/MuiLoadingButton';
import MuiTabs from './components/MuiTabs';
import MuiResponsitive from './components/MuiResponsitive';
import { createTheme, colors, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <MuiResponsitive />
      </div>
    </ThemeProvider>
  );
}

export default App;
