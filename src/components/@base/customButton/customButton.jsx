import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '../../theme/CustomTheme';
import CircularProgress from '@mui/material/CircularProgress';

const CustomButton = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = true,
  loading = false,
  startIcon,
  endIcon,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const defaultClasses = 'font-bold rounded-xl py-3 px-4 transition-all duration-300';
  const colorClasses = {
    primary: 'bg-teal-600 hover:bg-teal-700 text-white',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
    error: 'bg-red-600 hover:bg-red-700 text-white',
    outlined: 'border-2 border-teal-600 text-teal-600 hover:bg-teal-50',
    text: 'text-teal-600 hover:bg-teal-50',
  };

  const sizeClasses = {
    small: 'text-sm py-2 px-3',
    medium: 'text-base py-3 px-4',
    large: 'text-lg py-4 px-6',
  };

  const getButtonClasses = () => {
    let classes = `${defaultClasses} ${sizeClasses[size]} `;

    if (variant === 'contained') {
      classes += colorClasses[color];
    } else if (variant === 'outlined') {
      classes += colorClasses.outlined;
    } else {
      classes += colorClasses.text;
    }

    if (fullWidth) {
      classes += ' w-full min-w-[250px]';
    }

    if (disabled) {
      classes += ' opacity-50 cursor-not-allowed';
    }

    // Add custom className at the end to allow overriding
    return `${classes} ${className}`.trim();
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Button
        variant={variant}
        disabled={disabled || loading}
        onClick={onClick}
        type={type}
        startIcon={startIcon}
        endIcon={endIcon}
        className={getButtonClasses()}
        {...props}
      >
        {loading ? <CircularProgress size={24} color='inherit' /> : children}
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;