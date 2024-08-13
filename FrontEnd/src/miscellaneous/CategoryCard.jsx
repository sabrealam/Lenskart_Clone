import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
  return (
    <Box
      w={[ "275px", "400px", "200px"]}
      h={[ "200px", "300px", "150px"]}
      bg={"white"}
      p={2}
      borderRadius={"10px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      
    >
      <Image src={props.src} borderRadius={"5px"} />
      <Link to={props.to}>
        {" "}
        <Text textAlign={"center"} mt={2.5} fontSize={["17px", "20px"  ]}>
          {" "}
          {props.name}
        </Text>{" "}
      </Link>
    </Box>
  );
}
