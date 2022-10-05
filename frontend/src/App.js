import React, {useState, useEffect} from 'react'
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import * as choreServices from '../src/Api/choreServices'

function App() {
  const BASE_URL = process.env.REACT_APP_BASE_URL
  const [chores, setChores] = useState([])
  useEffect(() =>{
    getAll()
  },[])
async function getAll(){
  const allC = await choreServices.getChores()
  console.log(allC)
  setChores(allC)
}
async function handleChoreDelete(id){
  const del = await choreServices.deleteChore(id)
  getAll()
}

  return (
    <div className="App">
      <Homepage chores={chores} handleChoreDelete={handleChoreDelete}/>
    </div>
  );
}

export default App;
