import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchBarItem(props) {
  return (
    <Box w={"100%"} h={"40px"}  p={"5px"} borderBottom={"1px solid gray"}>
    <Link to={`/search/${props.name}`}>{props.name}</Link> 
    </Box>
  )
}
