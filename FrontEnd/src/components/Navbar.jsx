import React from "react";
import { Box, HStack, Image, Input, Text } from "@chakra-ui/react";
import {Heart, PhoneCall, ShoppingBag} from "lucide-react" 
import { Link } from "react-router-dom";
export default function Navbar() {
  let topData = [
    "Do More, Be More",
    "Tryin3D",
    "StoreLocator",
    "Singapore",
    "UAE",
    "John Jacobs",
    "Aqualens",
    "Cobrowsing",
    "Engineering",
    "Blog",
    "Partner With Us",
  ];
  let catdata = [
    {to: "/mens" , name: "MENS GLASSES"},
    {to: "/womens", name: "WOMENS GLASSES"},
    { to: "/kidslense", name: "KIDS GLASSES"},
    { to: "/bluelens", name: "BLUE LENSES"},
    { to: "/screenlense", name: "SCREEN LENSES"},    
    { to:"/kidssunglass", name: "SUNGLASSES"},
    { to: "/buy1get1", name: "BUY 1 GET 1"},
  ]
  return (
    <Box w={"100%"} h={"160px"} pl={10} pt={"3"} position={"sticky"} top={0} zIndex={10} bg={"white"} >
        {/* Top Most Menu */}
      <HStack justifyContent="space-between" w={"100%"} pr={"20px"}
    //    bg={"green.100"}
       >
        <HStack flexWrap={"wrap"}>

        {topData.map((data,i) => (
            <Text key={i}  fontSize={"10"} cursor={"pointer"}>{data}&emsp; | </Text>
        ))}
        </HStack>
        <Text fontSize={"13"}>Contact Us</Text>
      </HStack>

      {/* Logo Meny Search Bar, Cart */}

      <HStack
        justifyContent="space-between"
        // bg={"red.100"}
        w={"100%"}
        h={"60px"}
        mt={3}
        >
            <Image src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="logo" w={"160px"} onClick={()=> location.href="/"} cursor={"pointer"} />

            <HStack>
                <PhoneCall size={20}/>  
                <Text fontWeight={"bold"} fontSize={"15"}>1800-202-4444</Text>
            </HStack>

            <Input placeholder="What are You Looking for" w={"550px"} h={"30px"} />
            <HStack w={"400px"}  justify={"space-evenly"}>
            <Text  fontSize={"15"} cursor={"pointer"}>Track Order </Text>
            <Text  fontSize={"15"} cursor={"pointer"}>Hemachandran </Text>
            <HStack cursor={"pointer"}>
            <Heart size={17}/>
            <Text  fontSize={"15"} cursor={"pointer"}> Wishlist </Text>
            </HStack>
            <HStack cursor={"pointer"}>
            <ShoppingBag size={17}/>
            <Text  fontSize={"15"} cursor={"pointer"}>Cart </Text>
            </HStack>
            </HStack>
        </HStack>
        {/* Category Menu */}

        <HStack w={"100%"} h={"50px"}
        //  bg={"red.100"} 
        justifyContent={"space-around"}
         mt={3}
         >
            <HStack w={"60%"} justify={"space-evenly"} flexShrink={0}>
                {catdata.map((data,i) => (
                    <Link to={data.to} key={i} fontWeight={"bold"} _hover={{"textDecoration":"underline", "color" : "red.300"}}  fontSize={"14"} cursor={"pointer"} color={"gray.550"}>{data.name}</Link>
                ))}
            </HStack>
            <HStack>
                <Image w={"20"}  src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png" alt="logo" />
                <Image w={"20"}  src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png" alt="logo" />
                <Image w={"20"}  src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png" alt="logo" />
            </HStack>
        </HStack>

    </Box>
  );
}

