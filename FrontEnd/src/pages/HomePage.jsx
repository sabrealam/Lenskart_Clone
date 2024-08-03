import React from "react";
import Navbar from "../components/Navbar";
import Image from "../miscellaneous/Image";
import CategoryCard from "../miscellaneous/CategoryCard";
import { Box, HStack } from "@chakra-ui/react";
import Strip from "../miscellaneous/Strip";
import ImageSlider from "../components/ImageSlider";
import StripText from "../miscellaneous/StripText";
import Footer from "../components/Footer";
import SubFooter from "../components/SubFooter";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
export default function HomePage() {
 
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();


  let catdata = [
    {
      to: "/mens",
      name: "MENS GLASSES",
      src: "https://static1.lenskart.com/media/desktop/img/Apr22/a2.png",
    },
    {
      to: "/womens",
      name: "WOMENS GLASSES",
      src: "https://static1.lenskart.com/media/desktop/img/Apr22/b2.png",
    },
    {
      to: "/kidslense",
      name: "KIDS GLASSES",
      src: "https://static1.lenskart.com/media/desktop/img/Apr22/d2.png",
    },
    {
      to: "/bluelens",
      name: "BLUE LENSES",
      src: "https://static1.lenskart.com/media/desktop/img/Apr22/d.png",
    },
    {
      to: "/screenlense",
      name: "SCREEN LENSES",
      src: "https://static1.lenskart.com/media/desktop/img/Apr22/e2.png",
    },
    {
      to: "/kidssunglass",
      name: "SUNGLASSES",
      src: "https://static1.lenskart.com/media/desktop/img/June22/prog11.jpg",
    },
    // { to: "/buy1get1", name: "BUY 1 GET 1" },
  ];
  let imageLink = [
    "https://static5.lenskart.com/media/uploads/web-banner.gif",
    "https://static5.lenskart.com/media/uploads/weblptt.jpg",
    "https://static1.lenskart.com/media/desktop/img/Feb24/bloom/InBloom-WebBanner.jpg",
    "https://static1.lenskart.com/media/desktop/img/republic/future-classic/web.gif",
    "https://static1.lenskart.com/media/desktop/img/May24/pro-fit-lenskart-air/Desktop-Bannerpro_fit040624.gif",
    "https://static5.lenskart.com/media/uploads/Coastline.gif",
  ];
  return (
    <Box>
      <Navbar />
      <HStack
        w={"100%"}
        h={"200px"}
        justifyContent="space-evenly"
        mt={"30px"}
        bg={"gray.100"}
      >
        {catdata.map((e, i) => (
          <CategoryCard to={e.to} key={i} name={e.name} src={e.src} />
        ))}
      </HStack>
        <Box w="100%"
        h="360px"
        bg={"cyan.400"}
        >

        
      <Image
        w="100%"
        h="100%"
        src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg"
      />
</Box>
      <Strip h={"40px"} />
      <ImageSlider data={imageLink} />
      <Strip h={"40px"} />

      <Image
        h="250px"
        src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
      />
      <Strip h={"40px"} />

      <StripText text={"Free Progressive Lenses"} />
      <Strip h={"40px"} />

      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/2024/may/prog/New%20Web%20Banner.jpg"
      />
      <Strip h={"60px"} />

      <StripText text={"Book Eye Test at Home"} />
      <Strip h={"60px"} />

      <Image
        h="390px"
        src="https://static5.lenskart.com/media/uploads/hechome11.png"
      />
      <Strip h={"60px"} />

      <StripText text={"Free Online Eye Test"} />
      <Strip h={"60px"} />

      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg"
      />

      <Strip h={"60px"} />

      <StripText text={"Premium Eyewear"} />
      <Strip h={"60px"} />

      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/oct23/home/13-10-23/As%20seen%20on%20Desk.jpg"
      />
      <Strip h={"60px"} />

      <StripText text={"As Seen on Mouni Roy"} />

      <Strip h={"60px"} />

      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif"
      />
      <Strip h={"60px"} />

      <StripText text={"As Seen on Shark Tank"} />

      <Strip h={"60px"} />

      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
      />
      <Strip h={"60px"} />

      <StripText text={"As Seen On Karan Johar"} />

      <Strip h={"60px"} />

      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
      />
      <Strip h={"60px"} />

      <StripText text={"Trending Sunglasses"} />

      <Strip h={"60px"} />

      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
      />
      <Strip h={"60px"} />

      <StripText text={"Aquacolor - Glam Up With Color Lenses"} />

      <Strip h={"60px"} />

      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
      />
      <Strip h={"60px"} />

      <StripText text={"OUR BRANDS"} />

      <Strip h={"60px"} />

      <Image
        h="250px"
        src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
      />
      <Strip h={"20px"} />
      <Footer />
    </Box>
  );
}
