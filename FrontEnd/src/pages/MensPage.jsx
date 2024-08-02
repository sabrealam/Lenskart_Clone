import { Box, Checkbox, Grid, HStack } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import Image from "../miscellaneous/Image";
import HelpLine from "../miscellaneous/HelpLine";
import SortingBar from "../components/SortingBar";
import ItemBox from "../components/ItemBox";
import Filter from "../components/Filter";
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../CustomHookAndFunction/fetchData";
import { GET_DATA } from "../redux/actionTypes";
export default function MensPage() {
  const url = import.meta.env.VITE_BASE_URL;
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);

  React.useEffect(() => {
    fetchData(`${url}/products/v2/mens`, dispatch, GET_DATA);
  }, []);

  return (
    <Box>
      <Navbar />
      <Box p={"30px"}>
        <HelpLine />
        <Image
          h={"145px"}
          src="https://static5.lenskart.com/media/uploads/plp-free-lenses-desk.png"
        />
        <HStack>
          <Box w={"20vw"}>
            <Filter />
          </Box>
          <Box>
            <SortingBar />
            <Box w={"100%"} p={"40px"}>
              <ItemBox />
            </Box>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
}
