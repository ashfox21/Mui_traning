import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function MuiCheckbox() {
  const [accept, setAccept] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ accept });
  console.log(skills);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccept(event.target.checked);
  };

  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);

    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((el) => el !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label='I accept terms and conditions'
          control={
            <Checkbox
              checked={accept}
              onChange={handleChange}
            />
          }
        />
      </Box>

      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={accept}
          onChange={handleChange}
          color='success'
          size='small'
        />
      </Box>

      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label='HTML'
              control={
                <Checkbox
                  value={'html'}
                  checked={skills.includes('html')}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label='CSS'
              control={
                <Checkbox
                  value={'css'}
                  checked={skills.includes('css')}
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label='JavaScript'
              control={
                <Checkbox
                  value={'js'}
                  checked={skills.includes('js')}
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckbox;
