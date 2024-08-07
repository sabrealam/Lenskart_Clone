import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA } from "../redux/actionTypes";
import ItemBox from "../components/ItemBox";
export default function WishList({ isOpen, onOpen, onClose }) {
  const [placement, setPlacement] = React.useState("left");
  let render = useSelector((state) => state.render);
  let dispatch = useDispatch();
  let user = JSON.parse(localStorage.getItem("user"));
  let url = import.meta.env.VITE_BASE_URL;
  let viewFav = async () => {
    try {
        let {data} = await axios({
            method: "post",
            url: `${url}/viewfavorite`,
            data: {email: user.user.email},
            headers: {
              "Authorization": `Bearer ${user.token}`,
              "Content-Type": "application/json",
            },
        })
        console.log(data)
        dispatch({ type: GET_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }

  };

  React.useEffect(() => {

    viewFav();
  }, []);
  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>

      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        size={"xl"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Wishlist</DrawerHeader>
          <DrawerBody>
            <Grid templateColumns={"repeat(3,1fr)"} gap={"5px"}>
              {render.map((data, item) => {
                return <ItemBox key={item} {...data} />;
              })}
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
