import { Theme } from 'coderbox-atoms'

const theme: Theme = {
  palettes: {
    primary: [ '#1b8ceb', '#106cb9', '#82c3ed' ],
    secondary: ['#f4511e', '#d84315', '#ffccbc'],
    success: [ '#00d1b2', '#00b398', '#00edc9' ],
    danger: [ '#e91e63', '#c2185b', '#f06292' ],
    gray: [ '#888888', '#383838', '#f1f1f1' ],
    light: ['#f1f1f1', '#cacaca', '#f8f8f8'],
    white: [ '#fff', '#fff', '#fff' ],
    black: [ '#000', '#000', '#000' ]
  },
  fonts: {
    primary:
      'BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif'
  },
  sizes: {
    tiny: '0.60rem',
    small: '0.785rem',
    normal: '1rem',
    medium: '1.2em',
    large: '1.5rem',
    xlarge: '2.0rem',
    huge: '3rem'
  },
  components: {
    box: {
      boxShadow: '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)',
      radius: '3px'
    },
    loader: {
      size: '1.30em',
      border: '2px solid',
      margin: '0'
    },
    icon: {},
    button: {
      height: '2.40em',
      padding: '0px 1.0em',
      radius: '3px'
    },
    link: {
      textDecoration: 'none'
    },
    group: {
      radius: '3px'
    }
  }
}

export default theme
