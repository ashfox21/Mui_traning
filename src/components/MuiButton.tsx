import React from 'react';
import { Stack, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Muiutton() {
    return (
        <Stack spacing={4}>
            <Stack
                spacing={2}
                direction='row'
            >
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            <Stack
                display={'block'}
                spacing={2}
                direction={'row'}
            >
                <Button
                    variant='contained'
                    size='small'
                >
                    Small
                </Button>
                <Button
                    variant='contained'
                    size='medium'
                >
                    Medium
                </Button>
                <Button
                    variant='contained'
                    size='large'
                >
                    Big
                </Button>
            </Stack>

            <Stack
                display={'block'}
                spacing={2}
                direction={'row'}
            >
                <Button
                    variant='contained'
                    size='medium'
                    startIcon={<SendIcon/>}
                    disableRipple
                >
                    Medium
                </Button>

                <Button
                    variant='contained'
                    size='medium'
                    endIcon={<SendIcon/>}
                    disableElevation
                >
                    Medium
                </Button>

                <IconButton aria-label='send' color='success' size='small'>
                  <SendIcon />
                </IconButton>

                <IconButton aria-label='send' color='error' size='large'>
                  <SendIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
}

export default Muiutton;
