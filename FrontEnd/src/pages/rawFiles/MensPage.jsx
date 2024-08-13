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
import "./css/MensPage.css";
import Footer from "../components/Footer";
import {
  filterBrand,
  filterColor,
  filterWidth,
  handleFilter,
} from "../CustomHookAndFunction/filterLogic";
import CardSkeleton from "../miscellaneous/CardSkeleton";
import GridComponents from "../components/GridComponents";
export default function MensPage() {
  let [skeleton, setSkeleton] = React.useState(100);
  const url = import.meta.env.VITE_BASE_URL;
  const state = useSelector((state) => state.render);
  const dispatch = useDispatch();

  console.log(state.length == 0);

  React.useEffect(() => {
    let res = fetchData(`${url}/products/v2/mens`, dispatch, GET_DATA);
    res.then((res) => {
      // let r = filterBrand(res, ["Lenskart Hustlr Screen Glasses", "John Jacobs Online", "Lenskart Hustlr"]);
      // let r = filterColor(res, ["Blue", "Black", "Red"]);
      // let r = filterWidth(res, ["139 mm", "119 mm"])
      // console.log(r, "filterBrand");
    });
    // handleFilter(state, dispatch);
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
        <HStack w={"100%"} h={"600px"}>
          <Box
            w={"20%"}
            minH={"500px"}
            h={"auto"}
            overflowY={"scroll"}
            className="scroll"
          >
            <Filter />
          </Box>
          <Box w={"80%"} h={"500px"} overflowX={"scroll"} className="scroll">
            <SortingBar data={state} />
            <GridComponents/>
            <Grid
              w={"100%"}
              p={"30px"}
              gridTemplateColumns={"repeat(3,1fr)"}
              gap={"10px"}
              display={"none"}
            >
              {/* <CardSkeleton/> */}

              {state.length == 0
                ? new Array(skeleton).fill(0).map((item) => {
                    return <CardSkeleton />;
                  })
                : state &&
                  state.map((item) => {
                    return <ItemBox key={item.id} {...item} />;
                  })}
            </Grid>
            {/* <HStack w={"100%"} p={"30px"} flexWrap={"wrap"} gap={"10px"}>
              {state && state.map((item) => {
                return (
                  <ItemBox key={item.id} {...item} />
                );
              })}
            </HStack> */}
          </Box>
        </HStack>
      </Box>
      <Footer />
    </Box>
  );
}
