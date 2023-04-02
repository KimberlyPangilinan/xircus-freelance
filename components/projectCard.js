import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image,Stack,Heading,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react'
import Btn from "./btn"
import Badge from './badge'
const ProjectCard = ({img,alt,productName,freelancer,description,price}) => {
  return (
  <Card minW='240px' maxW='240px' p='0'>
    <CardBody p='0'>
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
      <Stack mt='6' spacing='3' p='4'>
          <div>
              <Heading size='sm'>{productName}</Heading>
              <div className="freelancer">
                  <Badge freelancer={'Jane Doe'} title={'I'}/>
              </div>
          </div>
          <Text fontSize={14}>
              {description}
          </Text>
          <Text color='blue.600' fontSize='1xl'>
            {price}
          </Text>
          <Divider />
          <ButtonGroup  spacing='2'>
        <Btn type={"btn-primary"} size={"small"} title={"Purchase"} width={'10px'}/>
        <Btn variant='ghost' size={"small"} title={"View"}/>
      </ButtonGroup>
      </Stack>
    </CardBody>
    
   
  </Card>
  )
}

export default ProjectCard
