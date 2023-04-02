import React from 'react'
import { Container, Divider, Heading, Text } from '@chakra-ui/react'

const AboutSection = () => {
  return (
    <section>
        <div style={{width:"60%"}}>
            <Heading fontSize={30} fontWeight={500}>About us</Heading>
            <Divider style={{marginTop:"2vh",marginBottom:"2vh"}}/>
            <Text fontSize={25} fontWeight={1}>
                DecentraHire is a blockchain-driven, decentralized platform that connects clients with freelancers through NFTs and smart contracts. We offer a unique approach to tokenization and minting of projects, as well as rental of services with NFTs as tickets. We offer a flexible and adaptive approach to freelance work, allowing freelancers to showcase their skills and abilities while giving clients the freedom to choose the best match talent for their needs.
            </Text>
        </div>
    </section>
  )
}

export default AboutSection
