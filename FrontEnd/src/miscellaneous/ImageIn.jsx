import { Box, Img } from '@chakra-ui/react'
import React from 'react'

export default function ImageIn(props) {
  return (
  //  <Box w={"100%"} h={props.h} >
    <Img src={props.src} alt="" w={"100%"} h={"100%"} />
  //  </Box>
  )
}
