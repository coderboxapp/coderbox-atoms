import * as React from 'react'
import { css, ThemeProvider } from 'styled'
import theme from 'theme'

export const withTheme = (Component: React.SFC) => {
  return () => {
    return <ThemeProvider theme={theme}><Component /></ThemeProvider>
  }
}

export interface WithSpaceProps {
  hSpace?: string
  vSpace?: string
}

export const withSpace = ({ hSpace, vSpace }: WithSpaceProps): any => {
  if (!hSpace && !vSpace) return

  const marginLeft = hSpace ? `margin-right: ${hSpace} !important;` : ''
  const marginRight = vSpace ? `margin-bottom: ${vSpace} !important;` : ''

  return css`
    > *:not(:last-child) {
      ${marginLeft}
      ${marginRight}
    }
  `
}

export interface IsIconProps {
  isIcon?: boolean
}

const isIcon = ({ isIcon }: IsIconProps) => {
  if (!isIcon) return
  return css`
    padding: 0px 0.5em;
    & .icon {
      margin: 0;
    }
  `
}

export interface IsLoadingProps{
  isLoading?: boolean
}

const isLoading = ({ isLoading }: IsLoadingProps) => {
  if (!isLoading) return
  return css`
    color: transparent !important;
    pointer-events: none;
  `
}