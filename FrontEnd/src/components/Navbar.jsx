import React, { useRef } from "react";
import {
  Box,
  HStack,
  Image,
  Input,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Heart, PhoneCall, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircleCheckBig } from "lucide-react";
import axios from "axios";
import SearchBarItem from "../miscellaneous/SearchBarItem";
import { useNavigate, Navigate } from "react-router-dom";
import WishList from "../pages/WishList";
import { LOGOUT } from "../redux/actionTypes";
export default function Navbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [query, setQuery] = React.useState("");
  let [showSearchTrending, setShowSearchTrending] = React.useState(false);
  let state = useSelector((state) => state.auth);
  let url = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  let ref = document.getElementById("searchbar");
  let dispatch = useDispatch();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShowSearchTrending(false);
      // make this serach bar  blur
      ref.blur();
      navigate(`/api/search/${query}`);
    }
  };
  React.useEffect(() => {
    setShowSearchTrending(false);
  }, [state]);
  React.useEffect(() => {
    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [query]);

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
    { to: "/mens", name: "MENS GLASSES" },
    { to: "/womens", name: "WOMENS GLASSES" },
    { to: "/kidslense", name: "KIDS GLASSES" },
    { to: "/bluelens", name: "BLUE LENSES" },
    { to: "/screenlense", name: "SCREEN LENSES" },
    { to: "/kidssunglass", name: "SUNGLASSES" },
    { to: "/buy1get1", name: "BUY 1 GET 1" },
  ];

  let SearchBarData = [
    "SUNGLASSES",
    "MENS SUN GLASSE",
    "WOMENS GLASSES",
    "KIDS GLASSES",
    "BLUE LENSES",
    "COMPUTER GLASS",
    "AVIATOR",
    "JACOBS JHON GLASS",
    "VINCENT CHASE EYEGLASS",
  ];

  let logOut = ()=> {
    dispatch({type : LOGOUT})
    localStorage.removeItem("user")
    navigate("/")
  }
  return (
    <Box
      w={"100%"}
      h={"160px"}
      pl={10}
      pt={"3"}
      position={"sticky"}
      top={0}
      zIndex={10}
      bg={"white"}
    >
      {/* Wishlist component */}
      { isOpen && <WishList onOpen={onOpen} isOpen={isOpen} onClose={onClose} />}
      {/* Top Most Menu */}
      <HStack
        justifyContent="space-between"
        w={"100%"}
        pr={"20px"}
        //    bg={"green.100"}
      >
        <HStack flexWrap={"wrap"}>
          {topData.map((data, i) => (
            <Text key={i} fontSize={"10"} cursor={"pointer"}>
              {data}&emsp; |{" "}
            </Text>
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
        <Image
          src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg"
          alt="logo"
          w={"160px"}
          onClick={() => (location.href = "/")}
          cursor={"pointer"}
        />

        <HStack>
          <PhoneCall size={20} />
          <Text fontWeight={"bold"} fontSize={"15"}>
            1800-202-4444
          </Text>
        </HStack>
        <Box position={"relative"}>
          <Input
            placeholder="What are You Looking for"
            // onBlur={() => setShowSearchTrending(false)}
            onFocus={() => setShowSearchTrending(true)}
            w={"550px"}
            h={"30px"}
            id="searchbar"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Box
            position={"absolute"}
            display={showSearchTrending ? "block" : "none"}
            top={"30px"}
            right={"0px"}
            w={"100%"}
            h={"600px"}
            border={"1px solid gray"}
            borderTop={"none"}
            zIndex={100}
            bg={"white"}
            p={"20px"}
          >
            <Text fontSize={"25"}>Trending Search</Text>
            <VStack w={"100%"} h={"100%"} mt={"20px"} alignItems={"flex-start"}>
              {SearchBarData.map((data, i) => (
                <SearchBarItem key={i} name={data} />
              ))}
              {/* <SearchBarItem  name={"Sunglass"} /> */}
            </VStack>
          </Box>
        </Box>
        <HStack w={"400px"} justify={"space-evenly"}>
          <Text fontSize={"15"} cursor={"pointer"}>
            Track Order{" "}
          </Text>
          {state.isAuth ? (
            <CircleCheckBig size={25} color="green" cursor={"pointer"} onClick={logOut} />
          ) : (
            <Text fontSize={"15"} cursor={"pointer"}>
              <Link to="/login">Login</Link> /
              <Link to="/register">Register</Link>
            </Text>
          )}
          <HStack cursor={"pointer"} onClick={onOpen}>
            <Heart size={17} />
            <Text>
              <Text fontSize={"15"} cursor={"pointer"}>
                {" "}
                Wishlist{" "}
              </Text>
            </Text>
          </HStack>
          <HStack cursor={"pointer"}>
            <ShoppingBag size={17} />
            <Link to="/cart">
              <Text fontSize={"15"} cursor={"pointer"}>
                Cart{" "}
              </Text>
            </Link>
          </HStack>
        </HStack>
      </HStack>
      {/* Category Menu */}

      <HStack
        w={"100%"}
        h={"50px"}
        //  bg={"red.100"}
        justifyContent={"space-around"}
        mt={3}
      >
        <HStack w={"60%"} justify={"space-evenly"} flexShrink={0}>
          {catdata.map((data, i) => (
            <Link
              to={data.to}
              key={i}
              fontWeight={"bold"}
              _hover={{ textDecoration: "underline", color: "red.300" }}
              fontSize={"14"}
              cursor={"pointer"}
              color={"gray.550"}
            >
              {data.name}
            </Link>
          ))}
        </HStack>
        <HStack>
          <Image
            w={"20"}
            src="https://static1.lenskart.com/media/desktop/img/May22/3dtryon1.png"
            alt="logo"
          />
          <Image
            w={"20"}
            src="https://static1.lenskart.com/media/desktop/img/Mar22/13-Mar/blulogo.png"
            alt="logo"
          />
          <Image
            w={"20"}
            src="https://static5.lenskart.com/media/uploads/gold_max_logo_dc.png"
            alt="logo"
          />
        </HStack>
      </HStack>
    </Box>
  );
}
