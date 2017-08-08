import styled from 'styled-components'
import {
  isSize,
  isColor,
  isTextColor,
  isCircular,
  isOutlined
} from 'styled-utils'

export const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 1.5em;
  height: 1.5em;

  ${isSize}
  ${isCircular}
  ${isColor}
  ${isOutlined}
`
