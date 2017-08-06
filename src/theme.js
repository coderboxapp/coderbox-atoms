const theme = {}

theme.palettes = {
  primary: [ '#1b8ceb' ],
  success: [ '#00d1b2', '#00b398' ],
  danger: [ '#e91e63' ],
  light: [ '#dbdbdb' ],
  gray: [ '#888' ],
  white: [ '#fff' ],
  black: [ '#000' ]
}

theme.fonts = {
  primary:
    'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif'
}

theme.sizes = {
  maxWidth: '960px',
  radius: '5px',
  font: { tiny: '0.60rem', small: '0.85rem', normal: '1rem', large: '1.5rem', xlarge: '2.0rem', huge: '3rem' }
}

theme.shadows = {
  normal: `
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1)
  `
}

export default theme
