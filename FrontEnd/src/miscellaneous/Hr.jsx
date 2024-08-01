import { Box } from "@chakra-ui/react";
import React from "react";

export default function Hr(props) {
  return (
    <Box width={"100%"} h={props.h} display={"grid"} placeItems={"center"} mt={props.mt}>
       
        <Box width={props.width} h={"100%"} bg={props.bg}></Box>
       
    </Box>
  );
}
