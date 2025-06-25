import { Box, Tab } from '@mui/material';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
import React, { useState } from 'react';
import BusinessInfomationForm from './BusinessInfomationForm';
// import { customTheme } from '@/theme/CustomTheme';

export default function BusinessInformation({data}) {
  // const [platform, setPlatform] = useState('amazon');

  // const handleChangePlatform = (event, newValue) => {
  //   setPlatform(newValue);
  // };

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg w-full gap-2 flex flex-col">
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <BusinessInfomationForm/>
        </Box>
      </div>
    </div>
  );
}
