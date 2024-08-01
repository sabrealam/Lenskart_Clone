import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
  return (
    <Box
      w={"200px"}
      h={"150px"}
      bg={"white"}
      p={2}
      borderRadius={"10px"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Image src={props.src} borderRadius={"5px"} />
      <Link to={props.to}>
        {" "}
        <Text textAlign={"center"} mt={2.5} fontSize={"13px"}>
          {" "}
          {props.name}
        </Text>{" "}
      </Link>
    </Box>
  );
}
