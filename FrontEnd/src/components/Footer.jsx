import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import FooterMenu from "./FooterMenu";
import Hr from "../miscellaneous/Hr";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from 'lucide-react';
export default function Footer() {
  let services = {
    name: "Services",
    links: [
      { to: "", name: " Store Locator" },
      { to: "", name: "Buying Guide" },
      { to: "", name: "Frame Size" },
      { to: "", name: "Lens Type" },
    ],
  };
  let aboutUs = {
    name: "About Us",
    links: [
      { to: "", name: "We Are Hiring" },
      { to: "", name: "Refer And Earn" },
      { to: "", name: "About us" },
      { to: "", name: "Lenskart Coupons" },
    ],
  };
  let help = {
    name: "Help",
    links: [
      { to: "", name: "FAQs" },
      { to: "", name: "Contact Us" },
      { to: "", name: "Terms Of Use" },
      { to: "", name: "Privacy Policy" },
    ],
  }
  return (
    <Box
      w={"100%"}
      h={"80vh"}
      p={"50px"}
       bg={"#000042"}
       color={"white"}
    >
      <Heading>Buy The Best Eyewear From Lenskart</Heading>
      <Text fontSize={"16px"} mt={"10px"}>
        Lenskart Is The Leading E-Commerce Portal For Eyewear In India. It Has
        Revolutionised The Eyewear Industry In The Country With Its Omni-Channel
        Approach. From An Ever-Growing Number Of Offline Stores Across Major
        Cities In The Country To Innovative Integration Of Technology While
        Purchasing Online, Lenskart Caters To Every Customer With Several Deals
        And Offers.
      </Text>
      <br />
      <Text>
        A One-Stop Online Solution For Purchasing Eyewear And Its Accessories,
        Lenskart Delivers Them Right At Your Doorstep With Convenient Methods Of
        Payment. Sunglasses as well as Eyeglasses Are Available For Men And
        Women In A Diverse Array Of Styles And Trendy Colours. If You Want To
        Try Out Contact Lenses, Pick The Ones Of Your Choice From The Extensive
        Variety Of Coloured Contact Lenses From Our Online Store.
      </Text>
      <HStack w={"100%"} justifyContent={"space-between"} mt={"70px"}>
        <HStack w={"40%"} justifyContent={"space-around"} >
          {" "}
         <FooterMenu name={services.name} links={services.links} />
          <FooterMenu name={aboutUs.name} links={aboutUs.links} />
          <FooterMenu name={help.name} links={help.links} />

        </HStack>
        <Box w={"20%"}  >
          {" "}
          <HStack w={"100%"} justifyContent={"space-around"} >
            <Image   src="https://static.lenskart.com/media/desktop/img/play-store.svg" />
            <Image   src="https://static.lenskart.com/media/desktop/img/app-store.svg" />
          </HStack>
          <Text mt={"10px"} textAlign={"center"}>Download Lenskart App to buy
          Eyeglasses, Sunglasses and Contact Lenses</Text>
        </Box>
      </HStack>

      <Hr mt={"50px"} width={"100%"}  h={"1px"} bg={"gray"}/>
      <HStack w={"100%"} justifyContent={"space-between"} mt={"20px"}>
        <HStack w={"20%"} justifyContent={"space-around"}>
            <Link to={"/t&c"}>T & C</Link>
            <Link to={"/privacy"}>Privacy</Link>
            <Link to={"/disclaimer"}>Disclaimer</Link>
        </HStack>
        <HStack w={"30%"} justifyContent={"space-around"}>
            <Text>Version 1.0.0 || Follow Us</Text>
            <HStack w={"40%"} justifyContent={"space-around"}>
                <Link  to ="/" ><Facebook   /></Link>
                <Link  to ="/" ><Instagram   /></Link>
                <Link  to ="/" ><Twitter   /></Link>
            </HStack>
        </HStack>

      </HStack>
    </Box>
  );
}
