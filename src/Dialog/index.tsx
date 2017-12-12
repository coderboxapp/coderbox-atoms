import * as React from 'react'
import * as cx from 'classnames'
import * as s from './styles'
import { DialogProps } from './types';

const Dialog: React.SFC<DialogProps> = ({ header, footer, children, ...props }) => {
  return (
    <s.Dialog {...props}>
      {header && <s.Header {...props}>{header}</s.Header>}
      <s.Content>{children}</s.Content>
      {footer && <s.Footer>{footer}</s.Footer>}
    </s.Dialog>
  )
}

Dialog.displayName = 'Dialog'
Dialog.defaultProps = {
  color: 'primary'
}

export default Dialog
