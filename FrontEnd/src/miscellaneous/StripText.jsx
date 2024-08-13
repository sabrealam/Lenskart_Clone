import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./StripText.css";
export default function StripText(props) {
  return (
    <Box className="centered-text-container">
      <Text as={"span"} mr={[ "30px", "50px", "100px"]}className="center-line left-line"></Text>
      <Text as={"span"} fontSize={["12px", "20px", "30px"]} className="centered-text">
        {props.text}
      </Text>
      <Text as={"span"} mr={[ "30px", "50px", "100px"]} className="center-line right-line"></Text>
    </Box>
  );
}
