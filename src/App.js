import './App.css';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Link,Switch
} from "react-router-dom";
import About from './Components/About';
import { useState, useEffect } from 'react';
import axios from 'axios'
import About1 from './Components/About1';
import Users from './Components/Users';
import Search from './Components/Search';
import Userdetails from './Components/Userdetails';

function App() {
  const[users, SetUsers]=useState([]);
  const[user1,SetUser1]=useState({})
  const[repos,SetRepos]=useState([])
  
  const searchName = async (text) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    console.log(res);
    SetUsers(res.data.items)
  }
  const clearUser=()=>{
    SetUsers([])
  }
 const getDetails= async (login)=>{
   const res1= await axios.get(`https://api.github.com/users/${login}`)
   SetUser1(res1.data)

 }

 const getRepo= async(username)=>{
  const res= await axios.get(`https://api.github.com/users/${username}/repos?5per_page=57sort=asc`)
  SetRepos(res.data)

 }

  return (
    <Router>
      <Navbar/>
      <div className='container'>
        <Switch>
          <Route exact path='/' render={
            props=>(
              <>
              <Search searchName={searchName} showClear={users.length>0?true:false} clearUser={clearUser}/>
      <Users users={users}/>
      </>
            )
          }
/>

      {/* <Route exact path="/"><Users users={users}/></Route> */}
        
      <Route exact path="/about"><About/></Route>
      <Route exact path="/user/:anything" render={
        props=>(<Userdetails getDetails={getDetails} user1={user1} {...props} getRepo={getRepo} repos={repos}/>)
      }></Route>
      </Switch>
      </div>
      </Router>
    
    
   
  )
}

export default App;
