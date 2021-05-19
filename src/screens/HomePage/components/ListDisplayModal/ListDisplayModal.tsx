import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import React from 'react'

import _ from 'lodash'

// Exported for use by other components
export interface ModalProps<T> {
  data: Array<T>
  title: string
  isOpen: boolean
  onClose: () => void
  onClick: () => void
}

export const ListDisplayModal = ({
  data,
  title,
  isOpen,
  onClose,
  onClick,
}: ModalProps<string>): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {_(data).map((item) => (
            <Text onClick={onClick}>{item}</Text>
          ))}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
