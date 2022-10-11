import { useState } from "react";

function setToken(token) {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}


const tokenServices = {
  setToken
}

export default tokenServices