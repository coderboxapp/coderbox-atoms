import styled from 'styled-components'

const radius = p => p.theme.sizes.radius

export const HGroup = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  & > .button {
    margin: 0 -1px 0 0;
    border-radius: 0;
  }
  & > .button:first-child {
    border-radius: ${p => `${radius(p)} 0 0 ${radius(p)}`};
  }
  & > .button:last-child {
    border-radius: ${p => `0 ${radius(p)} ${radius(p)} 0`};
    margin-right: 0px
  }
`

export const VGroup = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  & > .button {
    margin: 0 0 -1px 0;
    border-radius: 0;
  }
  & > .button:first-child {
    border-radius: ${p => `${radius(p)} ${radius(p)} 0 0`};
  }
  & > .button:last-child {
    border-radius: ${p => `0 0 ${radius(p)} ${radius(p)} 0 0`};
    margin-right: 0px
  }
`
