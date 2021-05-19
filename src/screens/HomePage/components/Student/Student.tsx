import { Box, Image, Tooltip, useDisclosure } from '@chakra-ui/react'
import React from 'react'

import studentLogo from 'assets/student.svg'
import _ from 'lodash'

import ListDisplayModal from '../ListDisplayModal'
import { ModalProps } from '../ListDisplayModal/ListDisplayModal'

type StudentProps = Pick<ModalProps<string>, 'data' | 'onClick'>

export const Student = ({ data, onClick }: StudentProps): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Tooltip label="Be a student" placement="right">
        <Box p="8" boxShadow="lg" borderRadius="24px" onClick={onOpen}>
          <Image src={studentLogo} />
        </Box>
      </Tooltip>
      <ListDisplayModal
        data={data}
        title="Students"
        isOpen={isOpen}
        onClose={onClose}
        onClick={onClick}
      />
    </>
  )
}
