import styled, { css } from 'styled-components'
import {
  isCircular,
  withSize,
  withColor,
  withHover
} from 'styled-utils'

const isIcon = ({ isIcon }) => {
  if (!isIcon) return
  return css`
    padding: 0px 0.5em;
    & .icon {
      margin: 0;
    }
  `
}

const isLoading = ({ isLoading }) => {
  if (!isLoading) return

  return css`
    color: transparent !important;
    pointer-events: none;
  `
}

export const Button = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  height: ${p => p.theme.sizes.height};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0px 1.0em;
  cursor: pointer;
  outline: none;
  border: 1px solid;
  border-color: transparent;
  border-radius: ${p => p.theme.sizes.radius};
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
  
  & .icon {
    margin: 0 5px 0 0;
    ${withSize}
  }

  & .loader {
    position: absolute;
    left: calc(50% - (1.2em / 2));
    top: calc(50% - (1.2em / 2));
  }

  ${isIcon}
  ${withSize}
  ${withColor}
  ${isLoading}
  ${p => !p.isLoading && withHover(p)}
  ${isCircular}
`
