import {
  Box,
  Heading,
  HStack,
  Image,
  TagRightIcon,
  Text,
} from "@chakra-ui/react";
import { CircleAlert, HeartIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Checkbox,
} from "@chakra-ui/react";
import axiox from "axios";
import {useToast} from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { addToFav } from "../CustomHookAndFunction/fetchData";
export default function Detais(props) {
  let url = import.meta.env.VITE_BASE_URL;
  const toast = useToast()
  let state = useSelector((state) => state.auth);
  let token = JSON.parse(localStorage.getItem("user")).token
  // console.log(token)
  let addToCart = async (item, user) => {
    // console.log(item.id);
    try {
      let data = await axiox( {
        method: "post",
        url: `${url}/addtocart/${item.id}`,
        data: { email: user.user.email },
        headers: {
          Authorization: `Bearer ${token}`,
        },
        
      })
      console.log(`data`, data);
      toast({
        title: 'Item Added to Cart',
        description: "Item added to cart",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      })
    } catch (error) {
      console.log(error);
      toast({
        title: 'Item Not Added to Cart',
        description: "Item not added to cart",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      })
    }
  };
  // console.log(props.id);
  let addtf = (id)=> {
      let res = addToFav(id)
      if(res){
        toast({
          title: 'Item Added to Favorite',
          description: "Item added to favorite",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })
      }
      else{
        toast({
          title: 'Item Not Added to Favorite',
          description: "Item not added to favorite",
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })
      }
  }
  return (
    <Box w={"35%"} h={"100%"} p={"15px"}>
      <HStack justifyContent={"space-between"} mt={"20px"} >
        <Text color={"gray.500"} >Lenskart Air</Text>
        <HeartIcon size={30} cursor={"pointer"} onClick={()=> addtf(props.id)} />
      </HStack>
      <Text fontWeight={"bold"} fontSize={"22px"} mt={"10px"}>
        {props.searchProductName}
      </Text>
      <HStack mt={"20px"}>
        <Text color={"gray.500"} fontSize={"20px"}>
          Size : {props.size}
        </Text>
        <CircleAlert size={20} cursor={"pointer"} />
      </HStack>
      <Text mt={"15px"} color={"#00bac6"} fontSize={"25px"}>
        {" "}
        &#8377; 20000
      </Text>
      <Text color={"gray.500"} fontSize={"15px"}>
        Frame + Lens
      </Text>
      <Box w={"100%"} h={"90px"} mt={"10px"} bg={"#f7f1de"} p={"15px"}>
        <HStack
          w={"100%"}
          h={"100%"}
          justifyContent={"space-between"}
          pr={"30px"}
        >
          <Box>
            <Text fontSize={"15px"}>Limited Period Offer</Text>
            <Text fontSize={"18px"}>
              Get Free BLU Screen or Progressive Lenses!
            </Text>
          </Box>
          <TagRightIcon />
        </HStack>
      </Box>
      <Box
        mt={"30px"}
        w={"100%"}
        h={"80px"}
        bg={"#00bac6"}
        p={"15px"}
        textAlign={"center"}
        borderRadius={"5px"}
        onClick={() => addToCart(props, state.user)}
      >
        <Text color={"white"} fontSize={"17px"}>
          Select Lenses
        </Text>
        <Text color={"white"} fontSize={"14px"}>
          ( with 1 Year Warranty & 14 Day Return )
        </Text>
      </Box>
      <HStack
        mt={"30px"}
        w={"100%"}
        h={"80px"}
        p={"15px"}
        border={"1px solid gray"}
        textAlign={"center"}
        borderRadius={"5px"}
        justifyContent={"space-evenly"}
      >
        <Text fontSize={"17px"}>Try On</Text>
        <Image src="https://static.lenskart.com/media/desktop/img/pdp/try_on_model.png" />
      </HStack>

      <Box mt={"70px"}>
        <Accordion defaultIndex={[0]}>
          <AccordionItem>
            <h2>
              {/*  */}
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  h={"50px"}
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={"20px"}
                >
                  Technical information
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color={"gray.500"}>
              <HStack w={"50%"} justifyContent={"space-between"}>
                <Text>Product Id</Text>
                <Text>{props.id}</Text>
              </HStack>
              <HStack w={"50%"} justifyContent={"space-between"}>
                <Text>Model No.</Text>
                <Text>{props.model_name}</Text>
              </HStack>
              <HStack w={"50%"} justifyContent={"space-between"}>
                <Text>Frame Size</Text>
                <Text>{props.size}</Text>
              </HStack>
              <HStack w={"50%"} justifyContent={"space-between"}>
                <Text>Frame Width</Text>
                <Text>{props.width}</Text>
              </HStack>
              <HStack w={"50%"} justifyContent={"space-between"}>
                <Text>Color</Text>
                <Text>{props.color}</Text>
              </HStack>
              <Text color={"#00bac6"}>Show All Information</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  h={"50px"}
                  display={"flex"}
                  alignItems={"center"}
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"20px"}
                >
                  Visit Nearby Store
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  h={"50px"}
                  display={"flex"}
                  alignItems={"center"}
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"20px"}
                >
                  Review(613)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}
