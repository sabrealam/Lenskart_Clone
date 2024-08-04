import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import AllRoute from "./AllRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomePage from "./pages/HomePage";
import { useDispatch } from "react-redux";
import { LOGIN } from "./redux/actionTypes";

function App() {
  let [show, setShow] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  let dispatch = useDispatch();
  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: LOGIN, payload: user });
    }
  }, []);

  return (
    <>
      <AllRoute />
    </>
  );
}

export default App;
