import React from 'react';
import { LinearProgress, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '../../../theme/CustomTheme';

const Loader = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box 
        sx={{ 
          width: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <LinearProgress 
          sx={{
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'teal.600'
            },
            height: 3
          }}
        />
        <Box 
          sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%'
          }}
        >
          <LinearProgress 
            sx={{
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'teal.600'
              },
              height: 3
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Loader;
