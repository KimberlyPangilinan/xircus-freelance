import { useWallet, useNetwork } from '@xircus-web3/react'
import { useState } from 'react'
import { Container } from '@chakra-ui/react'

import Header from '../components/header'
import HomeSection from '../sections/homeSection'
import AboutSection from '../sections/aboutSection'
import PartnersSection from '../sections/partnersSection'
import HowToSection from '../sections/howToSection'
import FaqSection from '../sections/faqSection'
import OnboardingSection from '../sections/onboardingSection'
import FooterSection from '../sections/footerSection'

export default function index() {
    return (
      <div display={"fle"}>
        <Header/>
        <HomeSection/>
        <AboutSection/>
        <PartnersSection/>
        <HowToSection/>
        <FaqSection/>
        <OnboardingSection/>
        <FooterSection/>
      </div>

    )
  }

