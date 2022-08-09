import React from 'react'

import { useState , useEffect} from 'react'



export default ({handleChanger,log}) => {

  const [email,setEmail]= useState("")

  const [password,setPassword]=useState("")

  const onChange = (e) => {

      let obj= e.target

      if(obj.classList.contains("email")){

          setEmail(obj.value)
      }else if(obj.classList.contains("password")){

          setPassword(obj.value)
      }

    
  }

  useEffect(()=>{
    handleChanger(email,password)
})

  return (
    <section className="formBody">
      
    <div className="inputs" onChange={onChange}>

        <h1>Log In </h1>
         
         <div className="input">
          
             <input type="text" className="email" placeholder="Email"></input>
         </div>

         <div className="input">
          
             <input type="password" className="password" placeholder="Password"></input>
         </div>


       
        <button className="btn" onClick={log}>Log in</button>
    </div>
 </section>

  )
}
