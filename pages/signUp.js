import React from 'react'
import {Input,InputGroup,InputLeftElement,Textarea, InputRightElement,Stack,Container, Card,CardBody, CardHeader,Text,Heading } from '@chakra-ui/react'
import { AtSignIcon,InfoOutlineIcon, CheckIcon } from '@chakra-ui/icons'
import { Img } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Header from '../components/header'
import Btn from '../components/btn'
import { useWallet, useNetwork } from '@xircus-web3/react'
import { useQuery, gql } from '@apollo/client';




const SignUp = () => {
  
  return (
    <div className="SignUp">
    <Header/>
    <Container>  
        <Card>
            <CardHeader><Heading as='h1' size='sm'>Setting Up as Freelancer</Heading></CardHeader>
            <CardBody>
              <Stack spacing={4}>
                <Image src='gibbresh.png' fallbackSrc='https://via.placeholder.com/80' width={40} />
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<AtSignIcon color='gray.300' />}
                  />
                  <Input id='username' type='text' placeholder='Username' />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<InfoOutlineIcon color='gray.300' />}
                  />
                  <Input id='name' type='text' placeholder='Name' />
                </InputGroup>

                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    color='gray.300'
                    fontSize='1.2em'
                  />
                  <Textarea id='bio' placeholder='Enter your Bio here' />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents='none'
                    children={<InfoOutlineIcon color='gray.300' />}
                  />
                  <Input id='interests' type='text' placeholder='Interests' />
                </InputGroup>
                <Btn type={"btn-primary"}
                onClick = {(event) => {
                  var textssss = gql`
                  mutation Mutation{
                    addUsers(name: "${document.getElementById("username")}", screenName: "${document.getElementById("name")}", rating: "${0}", skills: "${document.getElementById("interests")}") {
                      text
                    }
                  }`;
                  
                }}
                title={"UpdateProfile"} />
                <Btn variant='ghost'  title={"Cancel"}/>
              </Stack>
            </CardBody>
        </Card>
    </Container>
   
    </div>
  )
}

export default SignUp
