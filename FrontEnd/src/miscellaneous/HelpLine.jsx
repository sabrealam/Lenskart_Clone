import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function HelpLine() {
  return (
    <HStack w={"100%"} h={"50px"} pr={"10px"} justifyContent={"space-between"} alignItems={"center"}>
        <Text>Eyewear / Eyeglasses / Promotions / Eyeglasses</Text>
        <Text fontSize={"15px"} color={"gray.600"}>Problem in placing order ? Give a missed call 1800-202-4444</Text>
    </HStack>
  )
}
