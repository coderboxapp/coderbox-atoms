import * as React from 'react'
import { Colors, Size } from 'coderbox-atoms';

export interface TextProps extends Size {
  className?: string
  children: React.ReactChild
  color?: Colors
  align?: 'left' | 'center' | 'right'
}