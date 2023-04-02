import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
const Btn= ({title,type,variant,size}) => {
  return (
    <>
      <Button variant={variant} className={type}  py={2} fontSize={12}>{title}</Button>
    </>
  )
}

export default Btn
