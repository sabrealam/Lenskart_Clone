import { Box, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CartItem() {
  return (
    <HStack
      w={"100%"}
      h={"320px"}
      mt={"20px"}
      borderRadius={"10px"}
    //   border={"1px solid gray"}
      bg={"white"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Box w={"40%"} h={"auto"}>
        <Image src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7875_1b_28july23.jpg" />
      </Box>
      <Box w={"60%"} h={"100%"} p={"20px"} >
        <HStack
          w={"100%"}
          h={"80px"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Text fontSize={"20px"} w={"60%"}>
            this is sabre alam and this my priject
          </Text>
          <Text fontSize={"20px"} w={"40%"} textAlign={"center"}>
            2000
          </Text>
        </HStack>
        <HStack
          w={"100%"}
          h={"40px"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Text fontSize={"18px"} w={"60%"}>
            Blu Scrreen Lanses
          </Text>
          <Text fontSize={"20px"} w={"40%"} textAlign={"center"}>
            2000
          </Text>
        </HStack>
        <Text color={"gray.400"}  >--------------------------------------------------------------</Text>
        <HStack
          w={"100%"}
          h={"40px"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Text fontSize={"16px"} w={"60%"}>
            Extra Discount
          </Text>
          <Text fontSize={"16px"} w={"40%"} textAlign={"center"}>
            2000
          </Text>
        </HStack>
        <HStack
          w={"100%"}
          h={"40px"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Text fontSize={"16px"} w={"60%"}>
            Final Price
          </Text>
          <Text fontSize={"16px"} w={"40%"}  textAlign={"center"}>
            2000
          </Text>
        </HStack>
        <Text color={"gray.400"} >--------------------------------------------------------------</Text>
        {/* <Spacer/> */}
        <HStack>
            <Link to="/remove">
            <Text textDecoration={"underline"}>Remove</Text>
            </Link>
            <Text> | </Text>
            <Link to="/remove">
            <Text textDecoration={"underline"}>Repeat</Text>
            </Link>
        </HStack>
      </Box>
    </HStack>
  );
}
