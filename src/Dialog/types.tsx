import * as React from 'react'
import { Color, Size } from 'coderbox-atoms'

export interface DialogProps extends Color {
  className?: string
  header?: React.ReactChild
  footer?: React.ReactChild
  maxWidth?: string
}