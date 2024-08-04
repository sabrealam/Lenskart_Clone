import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import CoupanApply from "./CoupanApply";
import { ArrowRightSquare } from "lucide-react";

export default function PriceBox() {
  return (
    <Box w={"100%"}>
      <Text fontSize={"30px"}>Bill Details </Text>
      <Box
        w={"100%"}
        h={"180px"}
        mt={"20px"}
        borderRadius={"10px"}
        bg={"white"}
        p={"20px"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      >
        <HStack justifyContent={"space-between"} >
            <Text>Total Item Price</Text>
            <Text fontSize={"20px"}>2000</Text>
        </HStack>
        <Text  color={"gray.300"}>---------------------------------------------</Text>
        <HStack justifyContent={"space-between"} >
            <Text>Total Discount</Text>
            <Text fontSize={"16px"}> - 2000</Text>
        </HStack>
        <Text color={"gray.300"}>---------------------------------------------</Text>
        <HStack justifyContent={"space-between"}  >
            <Text>Total Payable</Text>
            <Text fontSize={"20px"}>  2000</Text>
        </HStack>
      </Box>
      <CoupanApply/>
      <HStack >
      <Button bg={"#11daac"} mt={"20px"}  w={"100%"} h={"50px"}>Proceed To Checkout </Button>
    
      </HStack>
    </Box>
  );
}
