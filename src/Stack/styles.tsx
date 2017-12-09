import styled, { keyframes, withProps } from 'styled'

const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const StyledComponent = styled.div`
  position: relative;

  & .stack-item {
    display: none;
  }

  & .stack-item.visible {
    display: block;
    animation: ${fade} 0.25s linear;
    padding: 1px 0;
  }
`
