export const theme = {
  colors: {
    primary: {
      base: '#d87900',
      contrast: '#fff',
    },
    secondary: {
      base: '#f9fafb',
      contrast: '#000',
    },
    darker: {
      base: '#000',
      contrast: '#fff',
    },
    lighter: {
      base: '#fff',
      contrast: '#272343',
    },
    success: {
      base: '#4caf50',
      contrast: '#fff',
    },
    error: {
      base: '#f44336',
      contrast: '#fff',
    },
  },
  layout: {
    maxWidth: '1024px',
    vGap: '20px',
    hGap: '10px',
  },
  shadows: {
    base: '0 1px 15px 7px rgba(0,0,0,.05)',
    hover:
      'rgba(60, 64, 67, 0.4) 0px 1px 2px 0px, rgba(60, 64, 67, 0.2) 0px 1px 3px 1px;',
  },
  fontSizes: {
    xl: '30px',
    l: '25px',
    m: '20px',
    s: '16px',
    sx: '14px',
  },
  borderRadius: {
    base: '1em',
    small: '0.5em',
  },
  easings: {
    wiggle: 'cubic-bezier(0.74, -0.6, 0.225, 1.59)',
    base: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  },
};
