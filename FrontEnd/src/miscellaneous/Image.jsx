import { Box, Img } from '@chakra-ui/react'
import React from 'react'

export default function Image(props) {
  return (
   <Box w={"100%"} h={props.h} bg="red.300">
    <Img src={props.src} alt="" w={"100%"} j={"100%"} />
   </Box>
  )
}
