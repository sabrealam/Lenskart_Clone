import { Box, Img } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css"
export default function ImageSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
  };
  return (
    <Slider {...settings} className="slider-box">
      {props.data.map((item, index) => (
        <Box key={index} >
          <Img src={item} alt="" className="slider-img" />
        </Box>
      ))}
    </Slider>
  );
}
