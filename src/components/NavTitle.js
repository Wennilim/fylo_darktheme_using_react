import React from 'react'
import {  Link } from '@chakra-ui/react';

export default function NavTitle({title}) {

  return (
    <Link color= 'white' fontSize={['10','12','15','20','28']} _hover={{fontWeight:'bold', textDecoration:'underline'}}> {title}</Link>
  )
}
