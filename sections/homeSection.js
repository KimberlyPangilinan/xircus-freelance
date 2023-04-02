import React from 'react'
import { Container, Card, CardHeader, CardBody, CardFooter, Heading, Text } from '@chakra-ui/react'
import Btn from '../components/btn'
import Link from 'next/link'
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
              <Link href={"/signUp"}><Btn title={"Sign in as Freelancer"} type={"btn-primary"}/></Link>
              <Link href={"/signUpClient"}> <Btn title={"Sign in as Client"} type={"btn-secondary"}/></Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  )
}

export default HomeSection
