import { HStack, Select, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowDownUp } from "lucide-react";
import { useDispatch } from "react-redux";
import {handleSort} from "../CustomHookAndFunction/sortingLogic";
export default function SortingBar(props) {
  let dispatch = useDispatch();
 
  return (
    <HStack
      w={"100%"}
      h={"60px"}
      justifyContent={"space-between"}
      bg="#ededed"
      pl={"10px"}
      pr={"10px"}
    >
      <Text>EYEGLASS</Text>

      <HStack w={"30%"}>
        <HStack w={"50%"}>
          <ArrowDownUp color="#5ec3b9" />
          <Text color="#5ec3b9">Sort By</Text>
        </HStack>
        <Select
          onChange={(e) => handleSort( e.target.value,  props.data, dispatch)}
          placeholder="Best Seller"
          border={"1px solid black"}
          borderRadius={"1px"}
        >
          <option value="High TO Low">High TO Low</option>
          <option value="Low TO High">Low TO High</option>
          <option value="New"> new</option>
          <option value="Most Viewed">Most Viewed</option>
        </Select>
      </HStack>
    </HStack>
  );
}
