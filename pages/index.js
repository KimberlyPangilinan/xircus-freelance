import { useWallet, useNetwork } from '@xircus-web3/react'
import { useState } from 'react'
import Header from '../components/header'
import HomeSection from '../sections/homeSection/homeSection'
import { Container } from '@chakra-ui/react'

export default function index() {
    return (
      <div display={"fle"}>
        <Header/>
        <HomeSection/>
      </div>

    )
  }

