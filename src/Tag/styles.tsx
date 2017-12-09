import styledComponent, { withProps } from 'styled'
import { withColor, withSize } from 'styled-utils'
import { isIcon, isDelete } from 'utils'
import { TagProps } from './types';

const styled = withProps<TagProps>(styledComponent.div)
export const StyledComponent = styled`
  position: relative;
  font-family: ${p => p.theme.fonts.primary};
  font-weight: normal;
  border-radius: 3px;
  padding: 0 0.75rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 1.915em;
  line-height: 1.5;
  vertical-align: middle;

  &:not(:last-child) {
    margin: 0 0.25em 0 0;
  }

  & > .icon {
    ${withSize}
  }

  ${withColor}
  ${withSize}
  ${isDelete}
  ${isIcon}
`
