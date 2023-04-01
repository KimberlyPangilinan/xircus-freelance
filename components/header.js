import {Box,Spacer,ButtonGroup, Flex,Container, Heading, useColorMode, Wrap } from "@chakra-ui/react"
import {ConnectModal, Wallet } from "@xircus-web3/components"
import { useWallet, useSDK } from '@xircus-web3/react'
import Link from 'next/link'
import MenuDrawer from "./menuDrawer"
import NavLink from "./navLink"

export default function Header() {
  const wallet = useWallet()
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <>    
        <Flex backgroundColor={''} minWidth='max-content' alignItems='center'  py={4} px={16} gap='2' >
            <Box p='2'>
              <Heading size='md'><NavLink route="/" name="DecentraHire"/></Heading>
            </Box>
              <NavLink route="/browseJobs" name="Jobs Board"/>
              <NavLink route="/browseFreelancer" name="Freelancers Tavern"/>
              <NavLink route="/browseProjects" name="Projects Saloon"/>
            <Spacer />
            <ButtonGroup gap='2'>
                <ConnectModal>
                    <Wallet />
                </ConnectModal>
                <MenuDrawer wallet={wallet}/>
            </ButtonGroup>
        </Flex>
    </>
  )
}
