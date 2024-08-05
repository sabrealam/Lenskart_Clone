import { useToast } from "@chakra-ui/react";
import axios from "axios";

export default async function fetchData(url , dispatch, type) {
    // console.log(url)
    try {
        let {data} = await axios.get(url)
        console.log("data fetched successfully");
        dispatch({type : type , payload : data})
        return data
    } catch (error) {
        console.log(error)
    }
}
let user = JSON.parse(localStorage.getItem("user"));
let url = import.meta.env.VITE_BASE_URL;
export let addToFav = async (id) => {
    console.log(id);
    if (!user) {
      toast({
        title: "Please Login",
        description: "You need to login to add items in your wishlist",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      try {
        let { data } = await axios({
          method: "post",
          url: `${url}/addtofavorite/${id}`,
          data: {
            email: user.user.email,
          },
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(data);
        return data;
        // toast({
        //   title: "Item Added",
        //   description: "Item added to your wishlist",
        //   status: "success",
        //   duration: 3000,
        //   isClosable: true,
        //   position: "top-right",
        // });
      } catch (error) {
        console.log(error);
        // toast({
        //   title: "Error",
        //   description: "Something went wrong",
        //   status: "error",
        //   duration: 3000,
        //   isClosable: true,
        //   position: "top-right",
        // });
      }
    }
  };