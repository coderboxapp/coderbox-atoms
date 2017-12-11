import styled from 'styled'
import { isCircular, isMarginless, isPaddingless, isHidden } from 'styled-utils'
import { ImageProps } from './types';

interface Props {
  width?: string
  height?: string
}

export const StyledImage = styled.div`
  overflow: hidden;
  display: inline-flex;
  box-sizing: border-box;
  width: ${(p: Props): string => p.width || 'auto'};
  height: ${(p: Props): string => p.height || 'auto'};

  & img {
    width: 100%;
    height: 100%;
  }

  ${isMarginless}
  ${isPaddingless}
  ${isCircular}
  ${isHidden}
`
