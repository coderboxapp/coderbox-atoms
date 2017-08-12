import styled, { css } from 'styled-components'
import {
  withSize,
  withColor,
  withHover,
  isOutlined
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
  border-radius: ${p => p.theme.sizes.radius};;
  box-sizing: border-box;
  line-height: 1.5;

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
  
  & .icon {
    margin: 0 5px 0 0;
  }

  ${isIcon}
  ${withSize}
  ${withColor}
  ${withHover}
  ${isOutlined}
`
