import styled from 'styled-components'

const radius = p => p.theme.sizes.radius

export const HGroup = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  flex-direction: row;
  & > * {
    margin: 0 -1px 0 0 !important;
  }
  & > *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  & > *:first-child:not(:last-child) {
    border-radius: ${radius} 0 0 ${radius};
  }
  & > *:last-child:not(:first-child) {
    border-radius: 0 ${radius} ${radius} 0;
    margin-right: 0 !important;
  }
`

export const VGroup = styled.div`
  display: inline-flex;
  box-sizing: border-box;
  flex-direction: column;
  & > * {
    margin: 0 0 -1px 0 !important;
  }
  & > *:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
  & > *:first-child:not(:last-child) {
    border-radius: ${radius} ${radius} 0 0;
  }
  & > *:last-child:not(:first-child) {
    border-radius: 0 0 ${radius} ${radius};
    margin-right: 0 !important;
  }
`
