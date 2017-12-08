import * as React from 'react'
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule, StyledFunction } from 'styled-components';
import { ITheme } from 'coderbox-atoms';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ITheme>

export { css, injectGlobal, keyframes, ThemeProvider }
export default styled