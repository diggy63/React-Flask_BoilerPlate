import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./Componenet/Header/Header";
import * as choreServices from "../src/Api/choreServices";
import * as authServices from '../src/Api/authServices'

function App() {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [chores, setChores] = useState([]);
  useEffect(() => {
    getAll();
  }, []);
  async function getAll() {
    const allC = await choreServices.getChores();
    setChores(allC);
  }
  async function handleChoreDelete(id) {
    const del = await choreServices.deleteChore(id);
    getAll();
  }
  async function addChore(change) {
    const added = await choreServices.addToChore(change);
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
    console.log(login)
  }
  async function handleSignup(info){
    console.log(info)
    const signup = await authServices.signup(info)
    console.log(signup)
  }

  return (
    <div className="App">
      <Header handleLogin={handleLogin} handleSignup={handleSignup}/>
      <div className="mainContain">
        <Homepage
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
