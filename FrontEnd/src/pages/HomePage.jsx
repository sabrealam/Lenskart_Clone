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

export default function HomePage() {
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
        {catdata.map((e) => (
          <CategoryCard to={e.to} name={e.name} src={e.src} />
        ))}
      </HStack>

      <Image
        h="360px"
        src="https://static1.lenskart.com/media/desktop/img/harmony/28-jun-24/Web%20Banner%201920x520.jpg"
      />

      <ImageSlider data={imageLink} />
      <Strip />
      <Strip />

      <Image
        h="250px"
        src="https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"
      />
      <Strip />
      <Strip />

      <StripText text={"Free Progressive Lenses"} />
      <Strip />
      <Strip />
      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/2024/may/prog/New%20Web%20Banner.jpg"
      />
      <Strip />
      <Strip />
      <Strip />
      <StripText text={"Book Eye Test at Home"} />
      <Strip />
      <Strip />
      <Strip />

      <Image
        h="390px"
        src="https://static5.lenskart.com/media/uploads/hechome11.png"
      />
      <Strip />
      <Strip />
      <Strip />
      <StripText text={"Free Online Eye Test"} />
      <Strip />
      <Strip />
      <Strip />
      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg"
      />

      <Strip />
      <Strip />
      <Strip />
      <StripText text={"Premium Eyewear"} />
      <Strip />
      <Strip />
      <Strip />
      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/oct23/home/13-10-23/As%20seen%20on%20Desk.jpg"
      />
       <Strip />
      <Strip />
      <Strip />
      <StripText text={"As Seen on Mouni Roy"} />

      <Strip />
      <Strip />
      <Strip />
      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/23may/cannes/web.gif"
      />
       <Strip />
      <Strip />
      <Strip />
      <StripText text={"As Seen on Shark Tank"} />

      <Strip />
      <Strip />
      <Strip />
      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
      />
       <Strip />
      <Strip />
      <Strip />
      <StripText text={"As Seen On Karan Johar"} />

      <Strip />
      <Strip />
      <Strip />
      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/Dec22/Web_banner.gif"
      />
       <Strip />
      <Strip />
      <Strip />
      <StripText text={"Trending Sunglasses"} />

      <Strip />
      <Strip />
      <Strip />
      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/Jan23/sunglasses/Sun-Banner-web.gif"
      />
       <Strip />
      <Strip />
      <Strip />
      <StripText text={"Aquacolor - Glam Up With Color Lenses"} />

      <Strip />
      <Strip />
      <Strip />
      <Image
        h="390px"
        src="https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
      />
       <Strip />
      <Strip />
      <Strip />
      <StripText text={"OUR BRANDS"} />

      <Strip />
      <Strip />
      <Strip />
      <Image
        h="250px"
        src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg"
      />
      <Strip />
      <Footer/>
    </Box>
  );
}
