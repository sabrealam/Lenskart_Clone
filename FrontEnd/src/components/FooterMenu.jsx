import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function FooterMenu(props) {
  return (
    <Box>
      <Text fontSize={"25px"}>{props.name}</Text>
      {props.links.map((item, index) => (
        <Text key={index} fontSize={"15px"} mt={"10px"}>
          <Link to={item.to} >
            {item.name}
          </Link>
        </Text>
      ))}
    </Box>
  );
}
