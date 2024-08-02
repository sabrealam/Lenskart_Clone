import React from 'react'
import { HStack, Tag, TagLabel, TagRightIcon } from '@chakra-ui/react'
import { MdSettings } from 'react-icons/md'
import { StarIcon } from 'lucide-react'
export default function Badge() {
  return (
    <HStack spacing={4} mt={"10px"} w={"300px"} > 
    <Tag size='lg' colorScheme='blue'  bg={"#f5f5ff"}>
      <TagLabel>4.6</TagLabel>
      {/* <TagRightIcon as={MdSettings} /> */}
      <StarIcon size={18} />
      <TagLabel>613</TagLabel>
    </Tag>
    
</HStack>
  )
}
