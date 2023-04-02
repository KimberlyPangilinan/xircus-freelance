import React from 'react'
import { Container, Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react'
import Btn from '../components/btn'

const HomeSection = () => {
  return (
    <section className="homeSection">
      <div className="image-washer"></div>
      <div className="landing-contents">
        <Card style={{width:"50%",paddingTop:"2vh"}}>
          <CardBody style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            textAlign:'center',
            gap:'2vh',
            }}>
            <Heading>Welcome to The DecentraHire</Heading>
            <Text>Empower transactions, one block at a time.</Text>
            <div className="btn-group">
              <Btn title={"Sign up as Freelancer"} type={"btn-primary"}/>
              <Btn title={"Sign up as Client"} type={"btn-secondary"}/>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

export default HomeSection
