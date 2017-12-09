import styled, { keyframes } from 'styled'
import { withColor, withSize } from 'styled-utils'

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`

export const StyledComponent = styled.div`
  animation: ${rotate360} 550ms infinite linear;
  border: ${p => p.theme.components.loader.border};
  border-radius: 999px;
  border-right: 2px dotted;
  border-top-color: transparent;
  content: " ";
  display: block;
  position: relative;
  line-height: 1.5;
  width: ${p => p.theme.components.loader.size};
  height: ${p => p.theme.components.loader.size};
  margin: ${p => p.theme.components.loader.margin};
  box-sizing: border-box;
  
  ${withColor}
  ${withSize}
`