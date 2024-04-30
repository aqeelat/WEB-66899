import { createMuiTheme } from '@material-ui/core/styles';

const typography = {
  fontFamily: [
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
};

const palette = {
  primary: {
    main: '#2493d6',
    dark: '#157ab7',
    contrastText: '#fff',
    borderColor: '#d4d9e2',
    iconColor: '#999',
  },
  success: {
    main: '#1cbe69',
    light: '#1cda0f',
  },
  text: {
    primary: '#090909',
    secondary: '#777',
    paragraph: '#090909',
    disabled: '#979797',
    success: '#1cbe69',
  },
  error: {
    main: '#e25141',
    dark: '#f00110',
  },
};

const overrides = {
  MuiLink: {
    root: {
      color: palette.text.secondary,
    },
    underlineHover: {
      textDecoration: 'underline',
      '&:hover': {
        color: palette.text.primary,
      },
    },
  },
  MuiButton: {
    root: {
      padding: '18px 24px 17px',
      textTransform: 'uppercase',
      fontSize: '12px',
      fontWeight: 700,
      lineHeight: '1.25',
      borderRadius: '4px',
      boxShadow: 'none',
    },
    text: {
      padding: '18px 24px 17px',
    },
    textSizeSmall: {
      minWidth: '80px',
      padding: '8px 8px 7px',
      textTransform: 'none',
      fontSize: '12px',
    },
    outlinedPrimary: {
      borderColor: palette.primary.main,
      '&:hover': {
        color: palette.primary.contrastText,
        backgroundColor: palette.primary.main,
      },
      '&:active': {
        color: palette.primary.contrastText,
        backgroundColor: palette.primary.main,
      },
    },
    containedSecondary: {
      color: palette.primary.contrastText,
      backgroundColor: palette.success.main,
      '&:hover': {
        backgroundColor: palette.success.light,
      },
      '&:active': {
        backgroundColor: palette.success.light,
      },
    },
    outlinedSecondary: {
      color: palette.success.main,
      borderColor: palette.success.main,
      '&:hover': {
        color: palette.primary.contrastText,
        backgroundColor: palette.success.main,
        borderColor: palette.success.main,
      },
      '&:active': {
        color: palette.primary.contrastText,
        backgroundColor: palette.success.main,
        borderColor: palette.success.main,
      },
    },
  },
  MuiInputBase: {
    root: {
      fontSize: '14px',
    },
  },
  MuiOutlinedInput: {
    input: {
      padding: '16.5px',
    },
    inputMarginDense: {
      paddingTop: '13.5px',
      paddingBottom: '13.5px',
    },
    notchedOutline: {
      borderColor: palette.primary.borderColor,
    },
  },
  MuiInputLabel: {
    root: {
      fontSize: '14px',
      '&$shrink': {
        fontWeight: 500,
      },
    },
    outlined: {
      transform: 'translate(14px, 18px) scale(1)',
      '&$marginDense': {
        transform: 'translate(14px, 15px) scale(1)',
      },
    },
  },
  MuiFormControlLabel: {
    root: {
      '@media (min-width: 768px)': {
        width: 'max-content',
      },
    },
  },
  MuiSelect: {
    select: {
      display: 'inline-flex',
      alignItems: 'center',
      minWidth: '100px',
      backgroundColor: '#fff !important',
    },
    icon: {
      fill: palette.primary.iconColor,
    },
  },
  MuiAutocomplete: {

    root: {
      '& .MuiInputLabel-outlined.MuiInputLabel-marginDense': {
        transform: 'translate(14px, 14px) scale(1)'
      },
      '& .MuiFormLabel-filled.MuiInputLabel-outlined.MuiInputLabel-marginDense': {
        transform: 'translate(14px, -6px) scale(0.75)'
      },
      '&$focused': {

        '& .MuiInputLabel-outlined.MuiInputLabel-marginDense': {
          transform: 'translate(14px, -6px) scale(0.75)'
        },
      },
    },
    inputRoot: {
      '&[class*="MuiOutlinedInput-root"]': {

        '& $input': {
          padding: '7.5px 4px',
        },
      },
      '&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]': {

        '& $input': {
          padding: '7.5px 4px',
        },
      },
    },
  },
  MuiMenuItem: {
    root: {
      overflow: 'initial',
      whiteSpace: 'initial',
      backgroundColor: '#fff',
      '&:hover': {
        backgroundColor: '#edf6fc',
      },
    },
  },
  MuiCheckbox: {
    root: {
      color: palette.primary.borderColor,
    },
  },
  MuiRadio: {
    root: {
      color: palette.primary.borderColor,
    },
  },
  MuiBackdrop: {
    root: {
      zIndex: 1000,
      color: '#fff',
    },
  },
  MuiPopover: {
    paper: {
      minWidth: 130,
    },
  },
  MuiTabs: {
    flexContainer: {
      borderBottom: '1px solid #c4c4c4',
    },
  },
  MuiTab: {
    root: {
      textTransform: 'none',
    },
  },
  MuiTableRow: {
    root: {
      '&$hover:hover': {
        backgroundColor: '#edf6fc',
      },
    },
  },
  MuiTableCell: {
    root: {
      padding: '10px 16px',
    },
    stickyHeader: {
      backgroundColor: '#fff',
    },
  },
};

const breakpoints = {
  breakpoints: {
    values: {
      tablet: 768,
      laptop: 1024,
    },
  },
};

const theme = createMuiTheme({
  breakpoints,
  overrides,
  typography,
  palette,
});

export default theme;
