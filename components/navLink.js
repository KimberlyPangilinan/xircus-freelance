import React from 'react'
import Link from 'next/link'
import {Box} from "@chakra-ui/react"
const NavLink = ({name, route}) => {
  return (
    <Box py='2' px='8'>
      <Link href={route}>{name}</Link>
    </Box>
  )
}

export default NavLink
