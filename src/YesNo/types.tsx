import { Color, Size } from 'coderbox-atoms'

export interface TYesNo extends Color, Size {
  className?: string
  isLeft?: boolean
  isOpen?: boolean
  onYes?: () => void
  onNo?: () => void
}

export interface TYesNoMapped extends TYesNo {
  setIsOpen: (value: boolean) => void
  onYes: () => void
  onNo: () => void
}