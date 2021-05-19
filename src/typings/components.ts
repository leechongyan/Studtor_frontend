// Exported for use by other components
export interface ModalProps<T> {
  data?: Array<T>
  title: string
  isOpen: boolean
  onClose: () => void

  onClick?: () => void
}
