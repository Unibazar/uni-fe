'use client';

import { useState } from 'react';
import AmazonInventory from './Amazon-Inventory';
import FlipkartInventory from './Flipkart-Inventory/Flipkart-Inventory';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';

export default function Inventory({ ProductData, page, setPage, totalProducts }) {
  const [tabState, setTabState] = useState('amazon');
  const handleChange = (event, newValue) => {
    setTabState(newValue);
  }

  return (
    <div className="w-full px-5 py-5">
      <div className="h-full w-full bg-white rounded-lg">
      <TabContext value={tabState}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Amazon" value="amazon" />
            <Tab label="Flipkart" value="flipkart" />
          </TabList>
        </Box>
        <TabPanel value="amazon">
          <AmazonInventory />
        </TabPanel>
        <TabPanel value="flipkart">
          <FlipkartInventory />
        </TabPanel>
      </TabContext>
      </div>
    </div>
  );
}
