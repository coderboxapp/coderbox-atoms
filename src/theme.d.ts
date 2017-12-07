declare module 'theme' {
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
}
