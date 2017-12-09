declare module 'styled-utils' {
  export function withColor(p: object): string
  export function withSize(p: object): string
  export function withDisplay(p: object): string
  export function withHover(p: object): string
  export function isMarginless(p: object): string
  export function isPaddingless(p: object): string
  export function isCircular(p: object): string
  export function isHidden(p: object): string
}

declare module 'styled-utils/color'

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

  export interface State {
    isLoading?: boolean
    isDisabled?: boolean
  }

  export interface Helpers {
    isMarginless?: boolean
    isPaddingless?: boolean
    isCircular?: boolean
    isHidden?: boolean
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
  export interface Theme {
    palettes: Palettes
    fonts: {
      primary: string
    },
    sizes: {
      tiny: string
      small: string
      normal: string
      medium: string
      large: string
      xlarge: string
      huge: string
    }
    components: any
  }
} 