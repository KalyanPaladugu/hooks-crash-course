import React from 'react'
import { useDetails } from './Chat'

export default function 
() {
    const value=useDetails()
  return (
    <div>
        <h1>Grand Child Name is {value.username}</h1>
        <input tyoe="text" value={value.username}
        onChange={
            (e)=>
            value.setUsername(e.target.value)
        }
        />
    </div>
  )
}
