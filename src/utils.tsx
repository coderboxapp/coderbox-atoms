import * as React from 'react'
import { ThemeProvider } from 'styled'
import theme from 'theme'

export const withTheme = (Component: React.SFC) => {
  return () => {
    return <ThemeProvider theme={theme}><Component /></ThemeProvider>
  }
}
