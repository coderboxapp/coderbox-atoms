import styledComponent, { withProps } from 'styled'
import { withSize, withColor, withHover, isMarginless, isPaddingless, isCircular } from 'styled-utils'
import { isIcon, isLoading } from 'utils'
import { ButtonProps } from './types';

const styled = withProps<ButtonProps>(styledComponent.div)
export const StyledButton = styled`
  font-family: ${p => p.theme.fonts.primary};
  height: ${p => p.theme.components.button.height};
  padding: ${p => p.theme.components.button.padding};
  border-radius: ${p => p.theme.components.button.radius};
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  border: 1px solid;
  border-color: transparent;
  box-sizing: border-box;
  line-height: 1.5;
  position: relative;
  user-select: none;
  text-decoration: none;

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
