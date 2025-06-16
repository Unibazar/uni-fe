import React from 'react';
import { 
  Select, 
  MenuItem, 
  RadioGroup, 
  Radio, 
  FormControlLabel,
  Slider,
  Checkbox,
  Switch,
  Box,
  FormHelperText
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '../../theme/CustomTheme';
import CustomTextField from '../CustomTextField/CustomTextField';

const FormField = ({
  type = 'text',
  label,
  value,
  onChange,
  options = [],
  error,
  helperText,
  disabled,
  InputProps = {},
  ...props
}) => {
  const renderField = () => {
    switch(type) {
      case 'select':
        return (
          <CustomTextField
            select
            label={label}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            {...props}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </CustomTextField>
        );

      case 'radio':
        return (
          <RadioGroup
            value={value}
            onChange={onChange}
            {...props}
          >
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>
        );

      case 'slider':
        return (
          <Slider
            value={value}
            onChange={onChange}
            {...props}
          />
        );

      case 'checkbox':
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={value}
                onChange={onChange}
                {...props}
              />
            }
            label={label}
          />
        );

      case 'switch':
        return (
          <FormControlLabel
            control={
              <Switch
                checked={value}
                onChange={onChange}
                {...props}
              />
            }
            label={label}
          />
        );

      default: // text, email, password etc
        return (
          <CustomTextField
            label={label}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            // disabled
            InputProps={InputProps}
            {...props}
          />
        );
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box className="w-full">
        {renderField()}
        {helperText && type !== 'text' && (
          <FormHelperText error={error}>{helperText}</FormHelperText>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default FormField; 