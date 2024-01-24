import React from 'react';
import { Typography } from '@mui/material';

function MuiTypography() {
    return (
        <div>
            <Typography variant='h1'>Heading h1</Typography>    
            <Typography variant='h2'>Heading h2</Typography>
            <Typography variant='h3'>Heading h3</Typography>
            <Typography variant='h4' component='h1'>Heading h4</Typography>
            <Typography variant='h5'>Heading h5</Typography>
            <Typography variant='h6'>Heading h6</Typography>

            <Typography variant='subtitle1'>Subtitle 1</Typography>
            <Typography variant='subtitle2'>Subtitle 2</Typography>

            <Typography variant='body1'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
                quia repellendus ad laborum et molestias assumenda consectetur
                amet quas numquam dolorum sequi, voluptas, quod illum libero id
                molestiae, rerum odit.
            </Typography>
            <Typography variant='body2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                eligendi quae ducimus, accusamus qui a et doloribus mollitia
                veniam cumque cupiditate, architecto quidem, ipsam vel aliquid
                reprehenderit impedit vero maiores?
            </Typography>
        </div>
    );
}

export default MuiTypography;
