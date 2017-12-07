
export interface ITheme {
  palettes: {
    primary: Array<string>
    success: Array<string>
    accent: Array<string>
    danger: Array<string>
    gray: Array<string>
    light: Array<string>
    white: Array<string>
    black: Array<string>
  },
  fonts: {
    primary: string
  },
  sizes: {
    maxWidth: string
    font: any,
    radius: string
  }
}

const theme: ITheme = {
  palettes: {
    primary: [ '#1b8ceb', '#106cb9', '#82c3ed' ],
    success: [ '#00d1b2', '#00b398', '#00edc9' ],
    accent: ['#f4511e', '#d84315', '#ffccbc'],
    danger: [ '#e91e63', '#c2185b', '#f06292' ],
    gray: [ '#888888', '#383838', '#f1f1f1' ],
    light: ['#f1f1f1', '#cacaca', '#f8f8f8'],
    white: [ '#fff', '#fff', '#fff' ],
    black: [ '#000', '#000', '#000' ]
  },
  fonts: {
    primary:
      'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif'
  },
  sizes: {
    maxWidth: '960px',
    font: { tiny: '0.60rem', small: '0.785rem', normal: '1rem', large: '1.5rem', xlarge: '2.0rem', huge: '3rem' },
    radius: '3px'
  }
}

export default theme
