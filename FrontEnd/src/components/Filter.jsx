import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { handleFilter } from "../CustomHookAndFunction/filterLogic";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  let {data} = useSelector((state) => state.render);
  let dispatch = useDispatch();
  let [filteredData, setFilteredData] = React.useState([]);
  let [filter, setFilter] = React.useState({
    color: [],
    brand: [],
    price: [],
    frameWidths: [],
  });
  if (JSON.parse(localStorage.getItem("filter")) == null) {
    localStorage.setItem("filter", JSON.stringify(filter));
  }
  let handleFilterColor = (e) => {
    const newColor = e.target.value;
    // console.log(e.target.value);
    setFilter((prevFilter) => {
      if (!prevFilter.color.includes(newColor)) {
        return {
          ...prevFilter,
          color: [...prevFilter.color, newColor],
        };
      } else {
        return {
          ...prevFilter,
          color: prevFilter.color.filter((item) => item !== newColor),
        };
      }
    });
    // console.log(filter);
  };

  let handleBrandColor = (e) => {
    let newBrand = e.target.value;
    setFilter((prevFilter) => {
      if (!prevFilter.brand.includes(newBrand)) {
        return {
          ...prevFilter,
          brand: [...prevFilter.brand, newBrand],
        };
      } else {
        return {
          ...prevFilter,
          brand: prevFilter.brand.filter((item) => item !== newBrand),
        };
      }
    });
  };

  let handleframeWidth = (e) => {
    let newFrameWidth = e.target.value;
    setFilter((prevFilter) => {
      if (!prevFilter.frameWidths.includes(newFrameWidth)) {
        return {
          ...prevFilter,
          frameWidths: [...prevFilter.frameWidths, newFrameWidth],
        };
      } else {
        return {
          ...prevFilter,
          frameWidths: prevFilter.frameWidths.filter(
            (item) => item !== newFrameWidth
          ),
        };
      }
    });
  };
  React.useEffect(() => {
    // console.log(filter);
    handleFilter(filter, data.slice() , dispatch , filteredData, setFilteredData);
    localStorage.setItem("filter", JSON.stringify(filter));
  }, [filter]);



  const colors = [
    "Black",
    "Blue",
    "Grey",
    "Gold",
    "Silver",
    "Transparent",
    "Brown",
    "Gunmetal",
    "Pink", 
  ];
  const brands = [
    "Lenskart Hustlr",
    "Lenskart Air",
    "Vincent Chase",
    "OWNDAYS",
    "Hooper",
    "Lenskart BLU Screen Glasses",
    "Fossil",
    "Lenskart",
    "John Jacobs Online",
    "OJOS",
    "New Balance",
    "Lenskart Air LA",
    "Hooper Switch",
  ];
  const frameWidths = [
    "114 mm",
    "116 mm",
    "118 mm",
    "119 mm",
    "120 mm",
    "121 mm",
    "122 mm",
    "123 mm",
    "124 mm",
    "125 mm",
    "126 mm",
    "127 mm",
    "128 mm",
    "129 mm", 
  ];
let frameData = [
  "FULL RIM",
  "RIM LESS",
  "HALF RIM"
]
  return (
    <Accordion defaultIndex={[0]} h={"auto"}>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              FRAME TYPR
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {/* color  */}
          {frameData.map((frame, index) => {
            return (
              <Box key={index}>
                <Checkbox
                  size={"md"}
                  value={frame}
                  onChange={(e) => handleFilterColor(e)}
                  key={index}
                >
                  {frame}
                </Checkbox>
              </Box>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              FRAME COLOR
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {/* color  */}
          {colors.map((color, index) => {
            return (
              <Box key={index}>
                <Checkbox
                  size={"md"}
                  value={color}
                  onChange={(e) => handleFilterColor(e)}
                  key={index}
                >
                  {color}
                </Checkbox>
              </Box>
            );
          })}
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              BRANDS
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {brands.map((brand, index) => {
            return (
              <Box key={index}>
                <Checkbox
                  size={"md"}
                  value={brand}
                  onChange={(e) => handleBrandColor(e)}
                  key={index}
                >
                  {brand}
                </Checkbox>
              </Box>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              PRICE
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              FRAMEWIDTH
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {frameWidths.map((frameWidth, index) => {
            return (
              <Box key={index}>
                <Checkbox
                  size={"md"}
                  value={frameWidth}
                  onChange={(e) => handleframeWidth(e)}
                  key={index}
                >
                  {frameWidth}
                </Checkbox>
              </Box>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
