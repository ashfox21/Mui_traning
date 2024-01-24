import React from 'react';
import { Stack, Box, Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

function MuiAuthocomplete() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Typescript'];

  type Skill = {
    id: number;
    label: string;
  };

  const skillsOption = skills.map((el, i) => ({
    id: i++,
    label: el,
  }));

  console.log({ value });
  console.log({ skill });

  const handleChange = (_event: any, newValue: string | null) => {
    setValue(newValue);
  };

  const handleChangeSkill = (_event: any, newValue: Skill | null) => {
    setSkill(newValue);
  };

  return (
    <Stack spacing={2}>
      <Box width={'250px'}>
        <Autocomplete
          options={skills}
          value={value}
          size='small'
          onChange={handleChange}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              label='Skills'
            />
          )}
        />
      </Box>

      <Box width={'250px'}>
        <Autocomplete
          options={skillsOption}
          value={skill}
          onChange={handleChangeSkill}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Skills'
            />
          )}
        />
      </Box>
    </Stack>
  );
}

export default MuiAuthocomplete;
