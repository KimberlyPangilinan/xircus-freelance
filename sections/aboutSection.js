import React from 'react'
import { Container } from '@chakra-ui/react'
import Btn from '../components/btn'

const AboutSection = () => {
  return (
    <section className="aboutSection" 
    style={{minHeight:'30vh'}}>
        <h1>About us</h1>
        <p>
            DecentraHire is a blockchain-driven, decentralized platform that connects clients with freelancers through NFTs and smart contracts. We offer a unique approach to tokenization and minting of projects, as well as rental of services with NFTs as tickets. We offer a flexible and adaptive approach to freelance work, allowing freelancers to showcase their skills and abilities while giving clients the freedom to choose the best match talent for their needs.
        </p>
    </section>
  )
}

export default AboutSection
