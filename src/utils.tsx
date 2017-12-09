import * as React from 'react'
import { css, ThemeProvider } from 'styled'
import theme from 'theme'

export const withTheme = (Component: React.SFC) => {
  return () => {
    return <ThemeProvider theme={theme}><Component /></ThemeProvider>
  }
}

export interface WithSpaceProps {
  space?: string
}

export const withSpace = ({ space }: WithSpaceProps): any => {
  if (!space) return
  return css`
    > *:not(:last-child) {
      margin-right: ${space} !important;
      margin-bottom: ${space} !important;
    }
  `
}

export interface IsIconProps {
  isIcon?: boolean
}

export const isIcon = ({ isIcon }: IsIconProps): any => {
  if (!isIcon) return
  return css`
    padding: 0px 0.5em;
    & .icon {
      margin: 0;
    }
  `
}

export interface IsDeleteProps {
  isDelete?: boolean
}

export const isDelete = ({ isDelete }: IsDeleteProps): any => {
  if (!isDelete) return
  return css`
    width: 1.915em;
    padding: 0;

    &::before,
    &::after {
      background-color: currentColor;
      content: "";
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      transform-origin: center center;
    }

    &::before {
      height: 1px;
      width: 50%;
    }

    &::after {
      height: 50%;
      width: 1px;
    }
  `
}

export interface IsLoadingProps{
  isLoading?: boolean
}

export const isLoading = ({ isLoading }: IsLoadingProps): any => {
  if (!isLoading) return
  return css`
    color: transparent !important;
    pointer-events: none;
  `
}

export const getHTMLProps = (props: any) => {
  const {
    color,
    size,
    isInverted,
    isOutlined,
    isCircular,
    isMarginless,
    isPaddingless,
    isHidden,
    ...rest
  } = props

  return rest
}