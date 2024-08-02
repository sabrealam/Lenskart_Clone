import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Badge from "../miscellaneous/Badge";
import { HeartIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function ItemBox(props) {
  return (
    <Link to={`/product/${props.id}`}>
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
      <Image  src={props.image_url} />
      <Badge />
      <Text fontSize={"18px"} mt={"10px"}>
        {props.brand_name}
      </Text>
      <Text>Size: {props.size} [ {props.tags} ]</Text>
      <Text fontWeight={"bold"} mt={"20px"}>
        ₹ {props.prices[0].price}
      </Text>
      
      <Box position={"absolute"} right={"20px"} top={"20px"} cursor={"pointer"}>
        <HeartIcon />
      </Box>
    </Box>
    {/* <Flex
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
      </Flex> */}
    </Box>
    </Link>
  );
}
// bg={"#ededed"}
