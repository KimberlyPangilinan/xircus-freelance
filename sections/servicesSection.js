import React from 'react'
import {Button, SimpleGrid, Container, Card, CardHeader, CardBody, CardFooter, Heading, Text, Divider } from '@chakra-ui/react'
import Link from 'next/link'

const ServicesSection = () => {
  return (
    <section style={{width:"100%",display:'flex',flexDirection:'column'}}>
        <Heading fontSize={30} fontWeight={500}>What we offer</Heading>
        <Divider width={"70%"} style={{margin:"2vh"}}/>
        <div style={{
            width:"70%",
            display:'flex',
            gap:'2%',
            marginLeft:'15%',
            marginRight:'15%'}}>
        <Card style={{width:"32%"}}>
            <CardHeader>
                <Heading size='md' fontSize={25} fontWeight={250}>Job Board</Heading>
                <Divider />
            </CardHeader>
            <CardBody>
                <Text>A place where freelancers can browse and accept job opportunities from clients.</Text>
            </CardBody>
            <CardFooter style={{display:"flex",justifyContent:"center"}}>
                <Link href={"/browseJobs"}><Button>View here</Button></Link>
            </CardFooter>
        </Card>
        <Card style={{width:"32%"}}>
            <CardHeader>
                <Heading size='md' fontSize={25} fontWeight={250}>Freelancers Tavern</Heading>
                <Divider />
            </CardHeader>
            <CardBody>
                <Text>A platform where clients can connect with freelancers that match their needs.</Text>
            </CardBody>
            <CardFooter style={{display:"flex",justifyContent:"center"}}>
            <Link href={"/browseFreelancer"}><Button>View here</Button></Link>
            </CardFooter>
        </Card>
        <Card style={{width:"32%"}}>
            <CardHeader>
                <Heading size='md' fontSize={25} fontWeight={250}>Projects Saloon</Heading>
                <Divider />
            </CardHeader>
            <CardBody>
                <Text>A marketplace for completed projects minted as NFTs, where freelancers can sell their work.</Text>
            </CardBody>
            <CardFooter style={{display:"flex",justifyContent:"center"}}>
                <Link href={"/browseProjects"}><Button>View here</Button></Link>
            </CardFooter>
        </Card></div>
    </section>
  )
}

export default ServicesSection
