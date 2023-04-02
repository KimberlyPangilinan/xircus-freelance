import React from 'react'
import { Button, ButtonGroup} from '@chakra-ui/react'


const Btn= ({title,type,variant, onClick}) => {
  return (
    <>
      <Button onClick = {onClick} variant={variant} className={type}>{title}</Button>
    </>
  )
}

export default Btn
