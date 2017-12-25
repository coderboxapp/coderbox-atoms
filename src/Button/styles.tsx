import styledComponent, { withProps } from 'styled'
import { withSize, withColor, withHover, isMarginless, isPaddingless, isCircular } from 'styled-utils'
import is from 'styled-is'
import { isIcon, isLoading } from 'utils'
import { ButtonProps } from './types';

const styled = withProps<ButtonProps>(styledComponent.div)
export const StyledButton = styled`
  height: ${p => p.theme.components.button.height};
  padding: ${p => p.theme.components.button.padding};
  border-radius: ${p => p.theme.components.button.radius};
  font-family: ${p => p.theme.fonts.primary};
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;

  ${is('hasShadow')`box-shadow: ${(p:any) => p.theme.components.button.boxShadow};`}

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }
  
  & .icon {
    margin: 0 5px 0 0;
    ${withSize}
  }

  & .loader-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .loader {
      max-height: 100%;
    }
  }

  ${withColor}
  ${withSize}
  ${(p): string => p.isLoading ? '' : withHover(p)}
  ${isMarginless}
  ${isPaddingless}
  ${isIcon}
  ${isLoading}
  ${isCircular}
`
