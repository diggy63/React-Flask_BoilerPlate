import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./Componenet/Header/Header";
import * as choreServices from "../src/Api/choreServices";
import * as authServices from '../src/Api/authServices'
import * as userServices from '../src/Api/userServices'

function App() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [chores, setChores] = useState([]);
  const [user, setUser] = useState('')
  useEffect(() => {
    findUser()
  }, []);
  
  async function getAll() {
    const allC = await choreServices.getChores(user.id);
    console.log(allC)
    setChores(allC);
  }
  async function handleChoreDelete(id) {
    const del = await choreServices.deleteChore(id);
    getAll();
  }
  async function addChore(change) {
    const added = await choreServices.addToChore(change, user);
    getAll();
  }
  async function handleChoreUpdate(chore, id) {
    const changer = await choreServices.updateChore(chore, id);
    getAll();
  }
  async function handleDone(id){
    console.log(id)
    const toggle = await choreServices.updateToggleDone(id)
    getAll()
  }
  async function handleLogin(info){
    const login = await authServices.login(info)
    if(login.error){
      console.log(login)
      return false
    }else{
      findUser()
      console.log('worked')
      return true
    }
  }
  async function handleSignup(info){
    const signup = await authServices.signup(info)
    if(signup.error){
      console.log(signup)
      return false
    }else{
      findUser()
      return true
    }
  }

  async function userLogout(){
    const logger  = await authServices.logout()
    findUser()
  }

  async function findUser(){
    const user = await userServices.getUser()
    setUser(user)
    const allC = await choreServices.getChores(user.id);
    console.log(allC)
    setChores(allC)
  }
  return (
    <div className="App">
      <Header handleLogin={handleLogin} handleSignup={handleSignup} user={user} userLogout={userLogout}/>
      <div className="mainContain">
        <Homepage
          user={user}
          chores={chores}
          handleChoreDelete={handleChoreDelete}
          addChore={addChore}
          handleChoreUpdate={handleChoreUpdate}
          handleDone={handleDone}
        />
      </div>
    </div>
  );
}

export default App;
