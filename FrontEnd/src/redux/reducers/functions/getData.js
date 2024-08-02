import axios from "axios";

export default function getData(state) {
  let url = import.meta.env;
  fetch(`https://lenscart-clone.onrender.com/api/products/v2/womens`,{
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data fetched successfully", data);
      return [...state, data];
    })
    .catch((err) => {
      console.log(err);
      return state;
    });

    return state
}
