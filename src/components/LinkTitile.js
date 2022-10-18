import React from 'react'
import { Link } from '@chakra-ui/react'

export default function LinkTitile({title}) {
  return (
    <Link color= 'white' fontSize="16px" _hover={{fontWeight:'bold'}}> {title}</Link>
  )
}
