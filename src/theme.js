const theme = {}

theme.palettes = {
  primary: [ '#1b8ceb' ],
  success: [ '#00d1b2', '#00b398' ],
  danger: [ '#e91e63' ],
  light: [ '#eee' ],
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
  font: { tiny: '0.60rem', small: '0.75rem', medium: '1rem', large: '1.5rem', big: '2.0rem', huge: '3rem' }
}

theme.shadows = {
  light: '0 1px 1px rgba(0,0,0,0.08)',
  normal: '0 1px 2px rgba(0, 0, 0, 0.12)',
  heavy: '0 2px 2px rgba(0, 0, 0, 0.15)'
}

export default theme
