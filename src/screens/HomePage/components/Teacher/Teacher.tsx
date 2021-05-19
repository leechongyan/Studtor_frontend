import { Box, Image, Tooltip, useDisclosure } from '@chakra-ui/react'
import React from 'react'

import teacherLogo from 'assets/teacher.svg'

import ListDisplayModal from '../ListDisplayModal'
import { ModalProps } from '../ListDisplayModal/ListDisplayModal'

type TeacherProps = Pick<ModalProps<string>, 'data' | 'onClick'>

export const Teacher = ({ data, onClick }: TeacherProps): JSX.Element => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <Tooltip label="Be a teacher" placement="right">
        <Box p="8" boxShadow="lg" borderRadius="24px" onClick={onOpen}>
          <Image src={teacherLogo} />
        </Box>
      </Tooltip>
      <ListDisplayModal
        data={data}
        title="Teachers"
        isOpen={isOpen}
        onClose={onClose}
        onClick={onClick}
      />
    </>
  )
}
