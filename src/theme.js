const theme = {}

// [ normal, dark, light ]
theme.palettes = {
  primary: [ '#1b8ceb', '#106cb9', '#82c3ed' ],
  success: [ '#00d1b2', '#00b398', '#00edc9' ],
  accent: ['#f4511e', '#d84315', '#ffccbc'],
  danger: [ '#e91e63', '#c2185b', '#f06292' ],
  gray: [ '#888888', '#383838', '#f1f1f1' ],
  light: ['#f1f1f1', '#cacaca', '#f8f8f8'],
  white: [ '#fff', '#fff', '#fff' ],
  black: [ '#000', '#000', '#000' ]
}

theme.fonts = {
  primary:
    'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif'
}

theme.sizes = {
  maxWidth: '960px',
  font: { tiny: '0.60rem', small: '0.785rem', normal: '1rem', large: '1.5rem', xlarge: '2.0rem', huge: '3rem' },
  radius: '3px',
  height: '2.40em'
}

theme.shadows = {
  normal: `
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1)
  `
}

export default theme
