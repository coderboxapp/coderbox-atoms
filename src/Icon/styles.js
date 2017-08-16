import styled, { css } from 'styled-components'
import {
  withSize,
  withColor,
  isCircular
} from 'styled-utils'

const hasBorder = ({ hasBorder }) => {
  if (!hasBorder) return
  return css`
    border: 1px solid transparent;
  `
}
export const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 1.6em;
  height: 1.6em;
  line-height: 1.5;

  ${withSize}
  ${withColor}
  ${isCircular}
  ${hasBorder}
`
