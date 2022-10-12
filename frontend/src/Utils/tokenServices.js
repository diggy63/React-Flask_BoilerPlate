import { useState } from "react";

function setToken(token) {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}

function getToken(){
  let token = localStorage.getItem('token')
  if(token){
    return token
  }else{
    return false
  }
}

  function removeToken(){
    localStorage.removeItem("token");
  }


const tokenServices = {
  setToken,
  getToken,
  removeToken
}

export default tokenServices