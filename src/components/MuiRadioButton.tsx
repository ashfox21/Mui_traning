import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    Stack,
    FormHelperText,
} from '@mui/material';

function MuiRadioButton() {
    const [value, setValue] = useState('');
    console.log(value);
    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    }
    return (
        <Stack spacing={4}>
            <FormControl>
                <FormLabel id='job-experience-group-label'>
                    Years of experience
                </FormLabel>
                <RadioGroup
                    name='job-experience-group'
                    aria-label='job-experience-group-label'
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        control={<Radio size='small' />}
                        label='0-2'
                        value={'0-2'}
                    />
                    <FormControlLabel
                        control={<Radio size='small'/>}
                        label='2-6'
                        value={'2-6'}
                    />
                    <FormControlLabel
                        control={<Radio size='small'/>}
                        label='6-10'
                        value={'6-10'}
                    />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id='job-experience-group-label'>
                    Years of experience
                </FormLabel>
                <RadioGroup
                    name='job-experience-group'
                    aria-label='job-experience-group-label'
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel
                        control={<Radio />}
                        label='0-2'
                        value={'0-2'}
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label='2-6'
                        value={'2-6'}
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label='6-10'
                        value={'6-10'}
                    />
                </RadioGroup>
            </FormControl>

            <FormControl error={true}>
                <FormLabel id='job-experience-group-label'>
                    Years of experience
                </FormLabel>
                <RadioGroup
                    name='job-experience-group'
                    aria-label='job-experience-group-label'
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel
                        control={<Radio />}
                        label='0-2'
                        value={'0-2'}
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label='2-6'
                        value={'2-6'}
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label='6-10'
                        value={'6-10'}
                    />
                </RadioGroup>
                <FormHelperText>Invalid selection</FormHelperText>
            </FormControl>
        </Stack>
    );
}

export default MuiRadioButton;
