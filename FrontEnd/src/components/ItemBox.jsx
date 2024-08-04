import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Badge from "../miscellaneous/Badge";
import { HeartIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
export default function ItemBox(props) {
  let toast = useToast();
  let user = JSON.parse(localStorage.getItem("user"));

  let url = import.meta.env.VITE_BASE_URL;
  let addToFav = async () => {
    if (!user) {
      toast({
        title: "Please Login",
        description: "You need to login to add items in your wishlist",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      try {
        let { data } = await axios({
          method: "post",
          url: `${url}/addtofavorite/${props.id}`,
          data: {
            email: user.user.email,
          },
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(data);
        toast({
          title: "Item Added",
          description: "Item added to your wishlist",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      } catch (error) {
        console.log(error);
        toast({
          title: "Error",
          description: "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
      }
    }
  };

  return (
    <Box>
      <Box
        w={"350px"}
        h={"350px"}
        border={"1px solid #ededed "}
        // borderRadius={"4px"}
        borderBottom={"none"}
        borderTopLeftRadius={"4px"}
        borderTopRightRadius={"4px"}
        // boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 4px"}

        position={"relative"}
      >
        <Box w={"100%"} h={"100%"} p={"10px"}>
          <Link to={`/product/${props.id}`}>
            <Image src={props.image_url} />
          </Link>
          <Link to={`/product/${props.id}`}>
            <Badge />
            <Text fontSize={"18px"} mt={"10px"}>
              {props.brand_name}
            </Text>
            <Text>
              Size: {props.size} [ {props.tags} ]
            </Text>
            <Text fontWeight={"bold"} mt={"20px"}>
              ₹ {props?.prices[0]?.price}
            </Text>
          </Link>

          <Box
            position={"absolute"}
            right={"20px"}
            top={"20px"}
            zIndex={`1000`}
            cursor={"pointer"}
            onClick={addToFav}
          >
            <HeartIcon />
          </Box>
        </Box>
        {/* <Flex
        w={"100%"}
        h={"35px"}
        bg={"yellow.100"}
        // mt={"10px"}
        borderTop={"none"}
        border={"1px solid #ededed "}
        justifyContent={"center"}
        alignItems={"center"}
        borderBottomRightRadius={"4px"}
        borderBottomLeftRadius={"4px"}
      >
        Get FREE BLU Screen Lenses
      </Flex> */}
      </Box>
    </Box>
  );
}
// bg={"#ededed"}
