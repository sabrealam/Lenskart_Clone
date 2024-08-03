import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
export default function CartPage() {
  return (
    <>
      <HStack
        w={"100%"}
        h={"10vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HStack
          w={"80%"}
          h={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" />
          <HStack>
            <ShieldCheck />
            <Text>100% safe and secure</Text>
          </HStack>
        </HStack>
      </HStack>
      <Box
        w={"100%"}
        h={"90vh"}
        bg={"#f7f1de"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box >
          <Text fontSize={"35px"} textAlign={"center"}>Your cart is empty</Text>
          <Link to={"/"}>
          <Button mt={"20px"} w={"400px"} bg={"#00bac6"}>Continue Shopping</Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}
