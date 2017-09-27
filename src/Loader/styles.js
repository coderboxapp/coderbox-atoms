import styled, { css, keyframes } from 'styled-components'
import { colors } from 'styled-utils'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const withColor = (p) => {
  if (!withColor) return
  let { bgColor, textColor } = colors(p)
  let color = p.isOutlined ? textColor : bgColor

  return css`
    border-left-color: ${color};
    border-bottom-color: ${color};
  `
}

export const Loader = styled.div`
  animation: ${rotate360} 500ms infinite linear;
  border: 2px solid;
  border-radius: 999px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  position: relative;
  width: 0.95em;
  height: 0.95em;

  ${withColor}
`
