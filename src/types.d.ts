declare module 'styled-utils' {
  export function withColor(): string
  export function withSize(): string
}

declare module 'coderbox-atoms' {
  export type Size = 'tiny' | 'small' | 'normal' | 'large' | 'xlarge' | 'huge'
  export type Color = 'primary' | 'secondary' | 'success' | 'danger' | 'gray' | 'light' | 'white' | 'black'
  export type Palette = Array<string>
  export interface IPalettes {
    primary: Palette
    secondary: Palette
    success: Palette
    danger: Palette
    gray: Palette
    light: Palette
    white: Palette
    black: Palette
  }
  export interface ITheme {
    palettes: IPalettes,
    fonts: {
      primary: string
    },
    sizes: {
      maxWidth: string
      font: any,
      radius: string
    }
    components: any
  }
} 