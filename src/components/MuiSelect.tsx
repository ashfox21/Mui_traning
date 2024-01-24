import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

function MuiSelect() {
    const [country, setCountry] = useState('');
    console.log(country);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }


    return (
        <Box width={'250px'}>
            <TextField
                label='Select country'
                select
                value={country}
                onChange={handleChange}
                fullWidth
            >
                <MenuItem value='FR'>France</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='UKR'>Ukraine</MenuItem>
            </TextField>
        </Box>
    );
}

export default MuiSelect;
