import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Badge from "../miscellaneous/Badge";
import { HeartIcon } from "lucide-react";

export default function ItemBox(props) {
  console.log(props)
  return (
    <Box w={"350px"}
    h={"350px"} border={"1px solid #ededed "}
    // borderRadius={"4px"}
    borderBottom={"none"}
    borderTopLeftRadius={"4px"}
    borderTopRightRadius={"4px"}
    // boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 4px"}
    
    position={"relative"}>
        
    <Box
      w={"100%"}
      h={"100%"} 
      p={"10px"}
    >
      <Image  src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7875_1b_28july23.jpg" />
      <Badge />
      <Text fontSize={"18px"} mt={"10px"}>
        {props.brand_name}
      </Text>
      <Text>Size: {props.size} [ {props.tags} ]</Text>
      <Text fontWeight={"bold"} mt={"20px"}>
        ₹ {props.prices}
      </Text>
      
      <Box position={"absolute"} right={"20px"} top={"20px"} cursor={"pointer"}>
        <HeartIcon />
      </Box>
    </Box>
    <Flex
        w={"100%"}
        h={"35px"}
        bg={"yellow.100"}
        // mt={"10px"}
        borderTop={"none"}
        border={"1px solid #ededed "}
        justifyContent={"center"}
        alignItems={"center"}
        borderBottomRightRadius={"4px"}
        borderBottomLeftRadius={"4px"}
      >
        Get FREE BLU Screen Lenses
      </Flex>
    </Box>
  );
}
// bg={"#ededed"}
