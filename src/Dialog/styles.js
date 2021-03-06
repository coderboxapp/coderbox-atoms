import styled from 'styled-components'
import { withColor } from 'styled-utils'

const radius = p => p.theme.sizes.radius

export const Dialog = styled.div`
  font-family: ${p => p.theme.fonts.primary};
  border-radius: ${p => p.theme.sizes.radius};
  box-shadow: ${p => p.theme.shadows.normal};
  max-width: ${p => p.maxWidth || '100%'};
  border: 1px solid white;
  text-align: center;
  background-color: white;
`

export const Header = styled.div`
  padding: 1em 1.5em;
  border-radius: ${radius} ${radius} 0 0;
  
  ${withColor}
`

export const Content = styled.div`
  padding: 1em 1.5em;
  min-height: 80px;
  position: relative;
`

export const Footer = styled.div`
  padding: 1em 1.5em;
  border-top: 1px solid;
  border-color: #cacaca;
  border-radius: 0 0 ${radius} ${radius};
  background-color: #f1f1f1;
`
