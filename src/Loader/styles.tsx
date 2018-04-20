import styled, { keyframes } from 'styled'
import { withColor, withSize } from 'styled-utils'

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
`

export const Container = styled.div`
  position: relative;
  width: ${p => p.theme.options.loader.size};
  height: ${p => p.theme.options.loader.size};
  margin: ${p => p.theme.options.loader.margin};
  padding: ${p => p.theme.options.loader.borderSize};
  ${withSize}
`

export const StyledLoader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate360} 450ms infinite linear;
  border-radius: 999px;
  border: ${p => p.theme.options.loader.borderSize} solid;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
  content: " ";
  display: block;
  width: ${p => p.theme.options.loader.size};
  height: ${p => p.theme.options.loader.size};
  margin: ${p => p.theme.options.loader.margin};
  background-color: transparent !important;

  ${withColor}
  ${withSize}
`

export const StyledLoaderShadow = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 999px;
  content: " ";
  display: block;
  border: ${p => p.theme.options.loader.borderSize} solid;
  width: ${p => p.theme.options.loader.size};
  height: ${p => p.theme.options.loader.size};
  margin: ${p => p.theme.options.loader.margin};
  border-color: rgba(0, 0, 0, 0.4);

  ${withSize}
`