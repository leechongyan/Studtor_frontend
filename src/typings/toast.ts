type Position =
  | 'bottom'
  | 'top'
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
type Status = 'info' | 'warning' | 'success' | 'error'
interface _Toast {
  title: string
  description: string
  status: Status
  id: string | number
  // duration is in milliseconds
  duration: number
  isClosable: boolean
  onCloseComplete: () => void
  position: Position
  variant: string
}

export type Toast = Partial<_Toast>
