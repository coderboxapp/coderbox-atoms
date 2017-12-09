import * as React from 'react'
import { Color, Size } from 'coderbox-atoms';

export interface SubtitleProps extends Color, Size {
  className?: string
  children: React.ReactChild
}