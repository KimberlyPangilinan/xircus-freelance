import React from 'react'
import { Tag,Card, CardHeader, CardBody, CardFooter, Image,Stack,Heading,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react'
import Btn from "./btn"
import Badge from './badge'
const FreelancerCard = ({img,alt,freelancer,description,priceperhour,noOfWorksDone}) => {
  return (
    <Card
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
    minWidth='800px'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='John Doe'
      />
    
      <Stack>
        <CardBody style={{
          display:'flex',
          flexDirection:'column',
          gap:4
        }}>
          <Heading size='md'><Badge freelancer={freelancer} title={'I'}/></Heading>
          <Text py='2'>
            {description}
          </Text>
          <div className="freelanceDetails">
                <Heading as='h5' size='xs'>{priceperhour} BNB per hour</Heading>
                <Heading as='h5' size='xs'>{noOfWorksDone} works done</Heading>
          </div>
          <div className="freelanceDetails">
                <Tag>Web Design</Tag>
                <Tag>Web Developer</Tag>
          </div>
          <Divider/>
          <ButtonGroup spacing='2'>
            <Btn type={"btn-primary"} title={"Hire"}/>
            <Btn variant='ghost'  title={"View"}/>
          </ButtonGroup>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default FreelancerCard
