import React from 'react'
import { Container } from '@chakra-ui/react'
import Btn from '../components/btn'

const HomeSection = () => {
  return (
    <section className="homeSection">
      <div className="image-washer"></div>
      <div className="landing-contents">
        <h1 className="heading">Welcome to The DecentraHire</h1>
        <h2 className="subheading">Empower transactions, one block at a time.</h2>
        <div className="btn-group">
          <Btn title={"Sign in as Freelancer"} type={"btn-primary"}/>
          <Btn title={"Sign in as Client"} type={"btn-secondary"}/>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
