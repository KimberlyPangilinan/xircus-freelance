import React from 'react'
import { Tag,Card, CardHeader, CardBody, CardFooter, Image,Stack,Heading,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react'
import Btn from "./btn"
import Badge from './badge'
const FreelancerCard = ({img,alt,freelancer,description,price}) => {
  return (
    <Card minW='60%' maxW='100%'>
      <CardBody className='cardbody'> 
        <Stack mt='6' spacing='3'>
            <div className="cardBody">
              <Image
                src={img}
                alt={alt}
                borderRadius='lg'
                objectFit='cover'
                minWidth='40px'
                width='40px'
                height='40px'
                aspectRatio='1'
              />
              <Heading size='md'><Badge freelancer={'Jane Doe'} title={'I'}/></Heading>
            </div>
            <Text>
                {description}
            </Text>
            <div className="freelanceDetails">
              <Heading as='h5' size='xs'>$20/ hour</Heading>
              <Heading as='h5' size='xs'>250 Jobs Done</Heading>

            </div>
            <div className="freelanceDetails">
              <Tag>Web Design</Tag>
              <Tag>Web Developer</Tag>
            </div>
           
          <Text color='blue.600' fontSize='2xl'>
            {price}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {price}
          </Text>
        </Stack>

      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Btn type={"btn-primary"} title={"Hire"}/>
          <Btn variant='ghost'  title={"View"}/>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default FreelancerCard
