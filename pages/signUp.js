import React from 'react'
import {Input,InputGroup,InputLeftElement, InputRightElement,Stack,Container, Card,CardBody, CardHeader,Text,Heading } from '@chakra-ui/react'
import { AtSignIcon,InfoOutlineIcon, CheckIcon } from '@chakra-ui/icons'
import Header from '../components/header'
const SignUp = () => {
  return (
    <div className="SignUp">
    <Header/>
    <Container>  
        <Card>
            <CardHeader>Setting Up</CardHeader>
            <CardBody>
              <Stack spacing={4}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<AtSignIcon color='gray.300' />}
                  />
                  <Input type='text' placeholder='Username' />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<InfoOutlineIcon color='gray.300' />}
                  />
                  <Input type='text' placeholder='Name' />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                    children='$'
                  />
                  <Input placeholder='Enter amount' />
                </InputGroup>
              </Stack>
            </CardBody>
        </Card>
    </Container>
   
    </div>
  )
}

export default SignUp
