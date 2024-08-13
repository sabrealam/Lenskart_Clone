import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Strip(props) {
  return (
    <Box w={"100%"} h={["20px", "15px", "20px", "25px", props.h]} 
    // bg={"red.500"}
    
    ></Box>
  )
}
