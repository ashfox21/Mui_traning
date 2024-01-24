import React, { useState } from 'react';
import {
    Stack,
    Button,
    IconButton,
    ButtonGroup,
    ToggleButtonGroup,
    ToggleButton,
} from '@mui/material';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';

function MuiToggleButton() {
    const [formats, setFormats] = useState<string | null>(null);
    const handleFormatChange = (
        _event: React.MouseEvent<HTMLElement>,
        updatedFormats: string | null
    ) => {
        setFormats(updatedFormats);
    };
    console.log(formats);

    return (
        <div>
            <Stack spacing={4}>
                <Stack direction='row'>
                    <ButtonGroup
                        variant='contained'
                        orientation='horizontal'
                        size='small'
                    >
                        <Button>left</Button>
                        <Button>Center</Button>
                        <Button>Right</Button>
                    </ButtonGroup>
                </Stack>

                <Stack direction='row'>
                    <ToggleButtonGroup
                        orientation='horizontal'
                        size='small'
                        aria-label='text formatting'
                        value={formats}
                        onChange={handleFormatChange}
                    >
                        <ToggleButton value={'bold'}>
                            <FormatBoldOutlinedIcon />
                        </ToggleButton>
                        <ToggleButton value={'italic'}>
                            <FormatItalicOutlinedIcon />
                        </ToggleButton>
                        <ToggleButton value={'underlined'}>
                            <FormatUnderlinedOutlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>

                <Stack direction='row'>
                    <ToggleButtonGroup
                        orientation='vertical'
                        size='medium'
                        aria-label='text formatting'
                        color='secondary'
                        value={formats}
                        onChange={handleFormatChange}
                        exclusive
                    >
                        <ToggleButton value={'bold'}>
                            <FormatBoldOutlinedIcon />
                        </ToggleButton>
                        <ToggleButton value={'italic'}>
                            <FormatItalicOutlinedIcon />
                        </ToggleButton>
                        <ToggleButton value={'underlined'}>
                            <FormatUnderlinedOutlinedIcon />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Stack>
            </Stack>
        </div>
    );
}

export default MuiToggleButton;
