import { TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '../../../theme/CustomTheme';

const CustomTextField = (props) => {
  // Remove asterisk from label if it exists
  const modifiedProps = {
    ...props,
    label: props.label?.replace(' *', ''), // Remove asterisk from label
    InputLabelProps: {
      ...props.InputLabelProps,
      required: false, // Never show the asterisk
      sx: {
        '&.Mui-focused': {
          color: `${customTheme.palette.primary.hover} !important`,
        }
      }
    },
    sx: {
      '& .MuiOutlinedInput-root': {
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: `${customTheme.palette.primary.hover} !important`,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: `${customTheme.palette.primary.main} !important`,
        }
      },
      '& .MuiInputLabel-root': {
        '&:hover': {
          color: customTheme.palette.primary.hover
        }
      },
      ...props.sx
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <TextField
      disabled={props?.disabled}
        variant={props.variant || 'standard'}
        {...modifiedProps}
      />
    </ThemeProvider>
  );
};

export default CustomTextField; 