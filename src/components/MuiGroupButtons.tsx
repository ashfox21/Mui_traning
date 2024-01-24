import React from 'react';
import { Stack, Button, IconButton, ButtonGroup } from '@mui/material';

function MuiGroupButtons() {
    return (
        <div>
            <Stack spacing={4}>
                <Stack direction='row'>
                    <Button variant='contained'>left</Button>
                    <Button variant='contained'>Center</Button>
                    <Button variant='contained'>Right</Button>
                </Stack>

                <Stack direction='row'>
                    <ButtonGroup variant='outlined' orientation='vertical'>
                        <Button>left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>

                <Stack direction='row'>
                    <ButtonGroup variant='contained' orientation='horizontal' color='secondary'>
                        <Button>left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>

                <Stack direction='row'>
                    <ButtonGroup variant='contained' orientation='horizontal' size='small' color='error'>
                        <Button>left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>
            </Stack>
        </div>
    );
}

export default MuiGroupButtons;
