import React from "react";
import { Skeleton, Stack } from "@chakra-ui/react";
export default function CardSkeleton() {
  return (
    <Stack
      w={"350px"}
      h={"350px"}
      p={"5px"}
      position="relative"
      borderRadius={"10px"}
    >
      <Skeleton height="250px" w={"100%"} alignSelf={"center"} />
      <Skeleton height="50px" w={"100px"} mt={"10px"} />

      <Skeleton height="50px" w={"100%"} mt={"10px"} />
      <Skeleton
        height="40px"
        position="absolute"
        w={"40px"}
        top="20px"
        right="30px"
        borderRadius={"50%"}
      />
      <Skeleton height="30px" w={"100%"} mt={"10px"} />
      <Skeleton height="50px" w={"100%"} mt={"10px"} />
    </Stack>
  );
}
