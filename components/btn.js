import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

const Btn= ({title,type,variant,onClick}) => {
  return (
    <>
      <Button variant={variant} className={type} onClick={onClick}>{title}</Button>
    </>
  )
}

export default Btn
