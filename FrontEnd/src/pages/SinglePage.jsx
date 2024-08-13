import { Box, Grid, Heading, HStack, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import HelpLine from "../miscellaneous/HelpLine";
import Footer from "../components/Footer";
import GridImage from "../components/GridImage";
import Detais from "../components/Detais";
import Image from "../miscellaneous/Image";
export default function SinglePage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let url = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/products/v2/find/${id}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <Box>
      <Navbar />
      <Box w={"100%"} h={"auto"} p={"35px"}   >

        <HelpLine />
        <HStack w={"100%"} h={"100%"} justifyContent={"space-between"} alignItems={"flex-start"}  >
        <GridImage {...data} />
        <Detais {...data}/>
        </HStack>
      </Box>

      <Image src={"https://static1.lenskart.com/media/desktop/img/Apr22/Bannerforexport.jpg"}  />
      <Footer/>
    </Box>
  );
}
