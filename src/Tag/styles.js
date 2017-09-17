import styled, { css } from 'styled-components'
import { withColor, withSize } from 'styled-utils'

const isDelete = ({ isDelete }) => {
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

const isIcon = ({ isIcon }) => {
  if (!isIcon) return
  return css`
    padding: 0px 0.3em;
    & .icon {
      margin: 0;
    }
  `
}

export const Tag = styled.div`
  position: relative;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: normal;
  border-radius: ${p => p.theme.sizes.radius};
  padding: 0 0.75rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 1.915em;
  line-height: 1.5;
  vertical-align: middle;

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  & > .icon {
    ${withSize}
  }

  ${withColor}
  ${withSize}
  ${isDelete}
  ${isIcon}
`
