import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image,Stack,Heading,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react'
import Btn from "./btn"
import Badge from './badge'
const ProjectCard = ({img,alt,productName,freelancer,description,price}) => {
  return (
<Card minW='300px' maxW='300px'>
  <CardBody>
    <Image
      src={img}
      alt={alt}
      borderRadius='lg'
      objectFit='cover'
      minWidth='180px'
      width='100%'
      height='112px'
      aspectRatio='1'
    />
    <Stack mt='6' spacing='3'>
        <div>
            <Heading size='md'>{productName}</Heading>
            <div className="freelancer">
                <Badge freelancer={'Jane Doe'} title={'I'}/>
            </div>
            
        </div>
        <Text>
            {description}
        </Text>
        
      
      <Text color='blue.600' fontSize='2xl'>
        {price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Btn type={"btn-primary"} title={"Purchase"}/>
      <Btn variant='ghost'  title={"View"}/>
      
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default ProjectCard
