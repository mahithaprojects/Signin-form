import React,{useState} from 'react'
//import React, { Component } from 'react'
const App =() =>{
  const[data,setData] =useState({
    username :'',
    password :''
  })
  const{username,password}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventDefault()
    console.log(data)
  }
  return(
    <div>
      <center>
        <form onSubmit={submitHandler}>
          Enter UserName:<input type="text" name="username" value={username} onChange={changeHandler}/><br/>
          Enter Password:<input type="password" name="password" value={password} onChange={changeHandler}/><br/>
          <input type="submit" name="submit"/>
        </form>
      </center>
    </div>
  )
}

    
  

export default App;