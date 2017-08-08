import styled from 'styled-components'

export const HGroup = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  & > .button {
    margin: 0 -1px 0 0;
    border-radius: 0;
  }
  & > .button:first-child {
    border-radius: 3px 0px 0px 3px;
  }
  & > .button:last-child {
    border-radius: 0px 3px 3px 0px;
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
    border-radius: 3px 3px 0px 0px;
  }
  & > .button:last-child {
    border-radius: 0px 0px 3px 3px;
    margin-right: 0px
  }
`
