import styled, { keyframes } from 'styled-components'
import { bgColor } from 'styled-utils'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const YesNo = styled.div`
  display: inline-block;
  box-sizeing: border-box;

  .btnNo,
  .btnYes {
    animation: ${fadeIn} 0.15s linear;
  }

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
`
