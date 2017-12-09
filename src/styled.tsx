import * as React from 'react'
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { Theme } from 'coderbox-atoms';

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>

type StyledFunction<T> = styledComponents.ThemedStyledFunction<T, Theme>
function withProps<P>(fn: StyledFunction<React.HTMLProps<HTMLElement>>): StyledFunction<P> {
  return fn as StyledFunction<P>
}

export { css, injectGlobal, keyframes, ThemeProvider, withProps }
export default styled