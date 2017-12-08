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
  export type Tones = 0 | 1 | 2
  export interface Color {
    color?: Colors
    tone?: Tones
    isInverted?: boolean
    isOutlined?: boolean
  }

  export interface Helpers {
    isCircular?: boolean
    hasBorder?: boolean
  }

  export interface Modifiers extends
    Color,
    Size,
    Helpers {
  }

  export type Palette = Array<string>
  export interface Palettes {
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
    palettes: Palettes,
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