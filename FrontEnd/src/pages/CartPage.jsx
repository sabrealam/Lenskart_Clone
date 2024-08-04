import { Box, Button, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ShieldCheck } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./css/MensPage.css";
import ImageIn from "../miscellaneous/ImageIn";
import CartItem from "../components/CartItem";
import PriceBox from "../components/PriceBox";
import { useSelector } from "react-redux";
import axios from "axios";
export default function CartPage() {
  let state = useSelector((state) => state.auth);
  let navigate = useNavigate();
  let user = JSON.parse(localStorage.getItem("user"));
  let url = import.meta.env.VITE_BASE_URL;



  React.useEffect(() => {
    let viewCart = async () => {
      try {
        let  data  = await axios({
          method: "post",
          url: `${url}/viewCart`,
          data:  {email: user.user.email} ,

          headers: {
            "Authorization": `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    viewCart();
    
  }, []);

  return (
    <>
      <HStack
        w={"100%"}
        h={"10vh"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <HStack
          w={"80%"}
          h={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image
            cursor={"pointer"}
            onClick={() => navigate("/")}
            src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
          />
          <HStack>
            <ShieldCheck />
            <Text>100% safe and secure</Text>
          </HStack>
        </HStack>
      </HStack>
      <Box
        w={"100%"}
        h={"90vh"}
        bg={"#fbf9f7"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box display={"none"}>
          <Text fontSize={"35px"} textAlign={"center"}>
            Your cart is empty
          </Text>
          <Link to={"/"}>
            <Button mt={"20px"} w={"400px"} bg={"#00bac6"}>
              Continue Shopping
            </Button>
          </Link>
        </Box>
        {/*  */}

        <HStack
          w={"90%"}
          h={"100%"}
          p={"20px"}
          justifyContent={"space-between"}
        >
          <Box
            w={"70%"}
            h={"100%"}
            p={"20px"}
            overflowY={"scroll"}
            className="scroll"
          >
            <Box w={"100%"} h={"1300px"}>
              <Box w={"100%"} h={"100px"}>
                <ImageIn
                  src={
                    "https://static5.lenskart.com/media/uploads/plp-free-lenses-desk.png"
                  }
                />
              </Box>
              <Text mt={"10px"} fontSize={"30px"}>
                CartItems [ ]
              </Text>
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </Box>
          </Box>
          <Box w={"30%"} h={"100%"} p={"20px"}>
            <PriceBox />
          </Box>
        </HStack>
      </Box>
      <Box w={"100%"} h={"100px"} p={"50px"}>
        <Text fontSize={"30px"}>Added From Wishlist</Text>
      </Box>
    </>
  );
}
