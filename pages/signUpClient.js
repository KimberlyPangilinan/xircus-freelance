import React from 'react'
import {Input,InputGroup,InputLeftElement,Textarea, InputRightElement,Stack,Container, Card,CardBody, CardHeader,Text,Heading } from '@chakra-ui/react'
import { AtSignIcon,InfoOutlineIcon, CheckIcon } from '@chakra-ui/icons'
import { Img } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Header from '../components/header'
import Btn from '../components/btn'
const SignUp = () => {
  return (
    <div className="SignUp">
    <Header/>
    <Container>  
        <Card>
            <CardHeader><Heading as='h1' size='sm'>Setting Up as Client</Heading></CardHeader>
            <CardBody>
              <Stack spacing={4}>
                <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/80' width={40} />
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
                    color='gray.300'
                    fontSize='1.2em'
                  />
                  <Textarea placeholder='Enter your Bio here' />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<InfoOutlineIcon color='gray.300' />}
                  />
                  <Input type='text' placeholder='Interests' />
                </InputGroup>
                <Btn type={"btn-primary"} title={"UpdateProfile"}/>
                <Btn variant='ghost'  title={"Cancel"}/>
              </Stack>
            </CardBody>
        </Card>
    </Container>
   
    </div>
  )
}

export default SignUp
