import { Box, HStack, TagRightIcon, Text, VStack } from "@chakra-ui/react";
import { MoveRightIcon } from "lucide-react";
import React from "react";

export default function CoupanApply() {
  return (
    <Box
      w={"100%"}
      h={"80px"}
      mt={"20px"}
      borderRadius={"10px"}
      bg={"white"}
      p={"20px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >

      <HStack justifyContent={"space-between"}>
        <VStack alignItems={"flex-start"}>

        <Text fontSize={"16px"} color={"black"}>
         Apply Coupan
        </Text>
        <Text mt={"-10px"} fontSize={"18px"} color={"gray.500"}>
         Check Available Offers
        </Text>
        </VStack>
        <Text fontSize={"20px"}>
          <MoveRightIcon />
        </Text>
      </HStack>
    </Box>
  );
}
