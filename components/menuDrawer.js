import React from 'react'
import {Container,Heading,Button,Box,Drawer,DrawerBody,DrawerFooter,DrawerHeader, DrawerOverlay,DrawerContent,Stack,DrawerCloseButton,useColorMode} from '@chakra-ui/react'
import { Icon,useDisclosure } from '@chakra-ui/react'
import { SettingsIcon,SunIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import {  ButtonMenu,Banner, ChangeNetwork, ConnectButton,CustomTable,  ConnectModal, ConnectWallet, Countdown, DisconnectButton, MarketTopup, NetworkInfo, OutlineCard, Swapper, Wallet } from "@xircus-web3/components"

export default function MenuDrawer({wallet}) {
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { toggleColorMode, colorMode } = useColorMode()
    
    return (
      <>
      
        <Button ref={btnRef}  onClick={onOpen}>
          <SettingsIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={'sm'}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>More</DrawerHeader>
  
            <DrawerBody>
            <Heading as ="h3" size='sm' colorScheme='blue'>Wallet Details:</Heading> 
            <div><Heading size='xs'>Address:</Heading> {wallet.account}</div>
            <div><Heading size='xs'>Balance:</Heading>  {wallet.balance}</div>
                <Stack spacing='24px'>
                <Heading as ="h3" size='sm'>Network Details:</Heading> 
                <Box>
                <ChangeNetwork width="100%"/>
                </Box>
                <OutlineCard color="gray.500">
                    <NetworkInfo variant="card" />
                </OutlineCard>
                
            </Stack>
            </DrawerBody>

            <DrawerFooter>
                <Box onClick={toggleColorMode}>{colorMode==='light'?   <Icon as={SunIcon} />:   <Icon as={SunIcon} />}</Box>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }