import tokenServices from "../Utils/tokenServices";

export function signup(info) {
  console.log(info);
  return fetch(`auth/signup`, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => {
    if (resp.ok) return resp.json();
    throw new Error("could not sign up");
  }).then((data) =>{
    tokenServices.setToken(data.access_token)
    return data
  })
}

export function login(info) {
  return fetch(`auth/login`, {
    method: "POST",
    body: JSON.stringify(info),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((resp) => {
    if (resp.ok){
      return resp.json();
    } 
    throw new Error("could not login");
  })
  .then((data) =>{
    tokenServices.setToken(data.access_token)
    return data
  })
}

export function logout(){
  tokenServices.removeToken()
}