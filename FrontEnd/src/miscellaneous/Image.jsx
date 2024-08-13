import { Box, Img } from '@chakra-ui/react'
import React from 'react'

export default function Image(props) {
  return (
  //  <Box w={"100%"} h={props.h} >
    <Img src={props.src}
     objectFit={"cover"} 
      alt="img"
       w={"100%"} 
       h={"100%"}
       
       />
  //  </Box>
  )
}
