import React, { useEffect, useMemo, useState } from 'react'
import useFetch from './useFetch'
import {MessagesContext, useDetails} from './Chat'
import GrandChild from './GrandChild'

export default function Messages() {
    const [user,setUser]=useState("Kalyan")
    // const [data,setData]=useState([])
   const data=useFetch('https://jsonplaceholder.typicode.com/users')
  const value1=useDetails()

const [a,setA]=useState(0);
const [b,setB]=useState(0);
const [dark,setDark]=useState(false);
const sum=useMemo(()=>{
  return SumOfTwo(a,b);}
,[a,b])
function SumOfTwo(a,b){
  // for(let i=0;i<1000000000;i++){}
  return parseInt(a)+parseInt(b)
}


const theme=useMemo(()=>{
  return {
    backgroundColor: dark ? "black":"white",
    color : dark ? "white":"black"
  }
},[dark])


useEffect(()=>{
  console.log("theme updated")
},[theme])
   return (

    
    <div>

<h1>UseMemo</h1>

<input type="number"  value={a} onChange={(e)=>setA(e.target.value)}/>
<input type="number"  value={b} onChange={(e)=> setB(e.target.value)}/>
<h1> Sum is {sum}</h1>
<div style={theme}>
  {sum}
  </div>
  <button onClick={()=>setDark(!dark)}>Change theme</button>

      <h1>Context</h1>
      {value1.username}
      <GrandChild />
      <MessagesContext.Consumer>
        {
          (value) =>
            <div>
              {value.username}
            </div>
          
        }
      </MessagesContext.Consumer>

      
        {/* {user}
        <button onClick={()=> setUser("Kalyan P")}>Change Name</button>
    {data.map((list)=>(
        <h1>{list.name}</h1>
    ))}

    <button>Ok</button> */}
    </div>
  )
}
