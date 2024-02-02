import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabList, TabContext, TabPanel } from '@mui/lab';
import { useState } from 'react';

function MuiTabs() {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '350px' }}>
          <TabList
            onChange={handleChange}
            variant='scrollable'
            scrollButtons='auto'
          >
            <Tab label='Tab one' value='1' />
            <Tab label='Tab two' value='2' />
            <Tab label='Tab three' value='3' />
            <Tab label='Tab four' value='4' disabled/>
            <Tab label='Tab five' value='5' />
            <Tab label='Tab six' value='6' />
          </TabList>
        </Box>
        <TabPanel value='1'>panel 1</TabPanel>
        <TabPanel value='2'>panel 2</TabPanel>
        <TabPanel value='3'>panel 3</TabPanel>
        <TabPanel value='4'>panel 4</TabPanel>
        <TabPanel value='5'>panel 5</TabPanel>
        <TabPanel value='6'>panel 6</TabPanel>
      </TabContext>
    </Box>
  );
}

export default MuiTabs;
