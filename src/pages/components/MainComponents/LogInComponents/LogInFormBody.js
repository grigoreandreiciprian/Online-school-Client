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

     
      console.log(email,password)
  }

  useEffect(()=>{
    handleChanger(email,password)
})

  return (
    <section class="formBody">
      
    <div class="inputs" onChange={onChange}>

        <h1>Log In </h1>
         
         <div class="input">
          
             <input type="text" class="email" placeholder="Email"></input>
         </div>

         <div class="input">
          
             <input type="password" class="password" placeholder="Password"></input>
         </div>


       
        <button class="btn" onClick={log}>Log in</button>
    </div>
 </section>

  )
}
