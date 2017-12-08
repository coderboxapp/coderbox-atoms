declare module 'styled-utils' {
  export function withColor(): string
  export function withSize(): string
}

declare module 'coderbox-atoms' {
  export type Sizes = 'tiny' | 'small' | 'normal' | 'large' | 'xlarge' | 'huge'
  export interface Size {
    size?: Sizes
  }

  export type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'gray' | 'light' | 'white' | 'black'
  export interface Color {
    color?: Colors
  }

  export type Palette = Array<string>
  export type Tone = 0 | 1 | 2
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