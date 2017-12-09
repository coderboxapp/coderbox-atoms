import styled, { keyframes } from 'styled'
import { withColor, withSize } from 'styled-utils'

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`

export const StyledComponent = styled.div`
  animation: ${rotate360} 500ms infinite linear;
  border: ${p => p.theme.components.loader.border};
  border-radius: 999px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: " ";
  display: block;
  position: relative;
  width: ${p => p.theme.components.loader.size};
  height: ${p => p.theme.components.loader.size};

  ${withColor}
  ${withSize}
`