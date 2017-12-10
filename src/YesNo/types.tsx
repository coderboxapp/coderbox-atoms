import { Color, Size } from 'coderbox-atoms'

export interface YesNoProps extends Color, Size {
  className?: string
  isLeft?: boolean
  isOpen?: boolean
  onYes?: () => void
  onNo?: () => void
}

export interface YesNoMappedProps extends YesNoProps {
  setIsOpen: (value: boolean) => void
  onYes: () => void
  onNo: () => void
}

export interface IsOpenState {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}