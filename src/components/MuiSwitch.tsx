import React, { useState } from 'react';
import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormGroup,
  FormLabel,
  FormHelperText,
  Stack,
} from '@mui/material';

function MuiSwitch() {
  const [checked, setChecked] = useState(false);
  const [preferences, setPreferences] = useState<string[]>([]);

  console.log({ checked });
  console.log(preferences);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  const handleChangePreferences = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const index = preferences.indexOf(event.target.value);

    if (index === -1) {
      setPreferences([...preferences, event.target.value]);
    } else {
      setPreferences(preferences.filter((el) => el !== event.target.value));
    }
  };
  return (
    <Stack spacing={4}>
      <Box>
        <FormControlLabel
          label='Dark mode'
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              size='small'
              color='secondary'
            />
          }
        />
      </Box>

      <Box>
        <FormControl>
          <FormLabel>Preferences</FormLabel>
          <FormGroup>
            <FormControlLabel
              label='Big text'
              control={
                <Switch
                  value={'big text'}
                  checked={preferences.includes('big text')}
                  onChange={handleChangePreferences}
                />
              }
            />

            <FormControlLabel
              label='hide NSFW'
              control={
                <Switch
                  value={'hide nsfw'}
                  checked={preferences.includes('hide nsfw')}
                  onChange={handleChangePreferences}
                />
              }
            />

            <FormControlLabel
              label='Hide Viewed'
              control={
                <Switch
                  value={'hide vieved'}
                  checked={preferences.includes('hide vieved')}
                  onChange={handleChangePreferences}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Stack>
  );
}

export default MuiSwitch;
