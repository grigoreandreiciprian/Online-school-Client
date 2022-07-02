import React from 'react'

import { useState } from 'react'

export default ({handlechanger,signStudent,log}) => {

    let [firstName,setFirst]=useState("")

    let [lastName,setLast]=useState("")

    let [email,setEmail]=useState("")

    let [age,setAge]=useState(0)

    let [password,setPassword]=useState("")

    const onChange = (e) =>{

        let obj= e.target;
    
        if(obj.classList.contains("Fname")){
    
            setFirst(obj.value)
        }else  if(obj.classList.contains("Lname")){
    
            setLast(obj.value)
      }else  if(obj.classList.contains("email")){
    
        setEmail(obj.value)
    
      }else  if(obj.classList.contains("age")){
    
        setAge(obj.value)
      }else  if(obj.classList.contains("password")){
    
        setPassword(obj.value)
      }
      console.log(firstName,lastName,email,age,password)

      handlechanger(firstName,lastName,email,age,password)
    }
  return (
    <main>
     <section class="logIn"  onChange={onChange}>
                <h1>Sign up</h1>

                <div class="inputs">
                    <label for="fname">First Name</label>
                    <input type="text" name="fname" class="Fname"></input>
                </div>

                <div class="inputs">
                    <label for="Lname">Last name</label>
                    <input type="text" name="email" class="Lname"></input>
                </div>
                
                <div class="inputs">
                    <label for="email">Email Adress</label>
                    <input type="email" name="email" class="email"></input>
                </div>

                <div class="inputs">
                    <label for="age">Age</label>
                    <input type="number" name="age" class="age"></input>
                </div>

                

                <div class="inputs">
                    <label for="password">Password</label>
                    <input type="password" name="password" class="password"></input>
                </div>

                <div class="buttons">
                    <a href="#">
                    <button class="sign2 btn" onClick={signStudent}>Sign Up</button>

                    </a>
                    <button class="log2 btn" onClick={log}>Log in</button>
                </div>

         </section>
         </main>
  )
}
