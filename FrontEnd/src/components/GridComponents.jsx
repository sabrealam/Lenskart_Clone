import React from "react";
import { Grid } from "@chakra-ui/react";
import ItemBox from "./ItemBox";
import CardSkeleton from "../miscellaneous/CardSkeleton";
import { useSelector } from "react-redux";
import { trusted } from "mongoose";
export default function GridComponents() {
    const state = useSelector((state) => state.render);
    const [skeleton, setSkeleton] = React.useState(100);
  return (
    <Grid
      w={"100%"}
      p={"30px"}
      gridTemplateColumns={"repeat(3,1fr)"}
      gap={"10px"}
    >
      {/* <CardSkeleton/> */}

      {state.loading == true
        ? new Array(skeleton).fill(0).map((item) => {
            return <CardSkeleton />;
          })
        : state.data &&
          state.data.map((item) => {
            return <ItemBox key={item.id} {...item} />;
          })}
    </Grid>
  );
}
