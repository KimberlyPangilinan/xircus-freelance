import React from 'react'
import { Tag,Card, CardHeader, CardBody, CardFooter, Image,Stack,Heading,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react'
import Btn from "./btn"
import Badge from './badge'
const JobCard = ({img,alt,jobTitle,name,description,currency,price,negotiable,cat}) => {
  return (
    <Card minW='60%' maxW='100%' pt={0} pb={4}>
      <CardBody className='cardbody' py={0} > 
        <Stack mt='6' spacing='3'>
            <div className="cardBody">
              <Image
                src={img}
                alt={alt}
                borderRadius='lg'
                objectFit='cover'
                minWidth='40px'
                width='40px'
                aspectRatio='1'
              />
              <Heading size='md'>{jobTitle}</Heading>
            </div>
            <Text>
              <Badge freelancer={name} title={cat}/>
            </Text>
            <div className="freelanceDetails">
              <Heading as='h5' size='xs'>{price} {currency}</Heading>
              <Heading as='h5' size='xs'>{negotiable}</Heading>
            </div>
            <div className="freelanceDetails">
              {description}
            </div>
            <Divider />
            <ButtonGroup spacing='2'>
              <Btn type={"btn-primary"} title={"Apply"}/>
              <Btn variant='ghost'  title={"View"}/>
            </ButtonGroup>
        </Stack>
        
      </CardBody>
      
      

  
    </Card>
  )
}

export default JobCard
