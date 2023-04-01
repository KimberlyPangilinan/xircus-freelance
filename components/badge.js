import React from 'react'
import {Text} from '@chakra-ui/react'
const Badge = ({freelancer,title}) => {
  return (
    <div className="badge">
      
        <h1>{freelancer}<span class="badgeItem">{title}</span></h1>
    </div>
  )
}

export default Badge
