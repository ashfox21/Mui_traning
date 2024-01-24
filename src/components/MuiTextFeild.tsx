import React, { useState } from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
function MuiTextFeild() {
    const [value, setValue] = useState('');

    return (
        <Stack spacing={4}>
            <Stack
                direction={'row'}
                spacing={2}
            >
                <TextField
                    label='outlined'
                    variant='outlined'
                />
                <TextField
                    label='filled'
                    variant='filled'
                />
                <TextField
                    label='standard'
                    variant='standard'
                />
            </Stack>

            <Stack
                direction={'row'}
                spacing={2}
            >
                <TextField
                    label='Small secondary'
                    size='small'
                    color='secondary'
                    variant='outlined'
                />
                <TextField
                    label='Medium error'
                    size='medium'
                    color='error'
                    variant='filled'
                />
            </Stack>

            <Stack
                direction={'row'}
                spacing={2}
            >
                <TextField
                    label='Form input'
                    size='small'
                    required
                />
                <TextField
                    label='Password'
                    size='small'
                    color='info'
                    type='password'
                    helperText='Do not share your password with anyone'
                />
                <TextField
                    label='Disabled'
                    size='small'
                    color='info'
                    disabled
                    type='password'
                    helperText='Do not share your password with anyone'
                />
                <TextField
                    label='Read only'
                    size='small'
                    InputProps={{ readOnly: true }}
                />
            </Stack>

            <Stack
                direction={'row'}
                spacing={2}
            >
                <TextField
                    label='Phone number'
                    type='tel'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>
                                tel +38
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label='Weight'
                    type='number'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end'>kg</InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack
                direction={'row'}
                spacing={2}
            >
                <TextField
                    label='Form input'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    error={!value}
                    required
                    helperText={
                        !value
                            ? 'Required'
                            : 'Do not share your password anyone'
                    }
                />
            </Stack>
        </Stack>
    );
}

export default MuiTextFeild;
