import React, { useState } from 'react'

export default ({sign,handleChanger,log}) => {

    const [email,setEmail]= useState("")

    const [password,setPassword]=useState("")

    const onChange = (e) => {

        let obj= e.target

        if(obj.classList.contains("email")){

            setEmail(obj.value)
        }else if(obj.classList.contains("password")){

            setPassword(obj.value)
        }

        handleChanger(email,password)
        console.log(email,password)
    }
  return (
    <main>
                <section class="logIn" onChange={onChange}>
                    <h1>Log in</h1>
                    
                    <div class="inputs">
                        <label for="Fname">First Name</label>
                        <input type="email" name="email" class="email"></input>
                    </div>

                    <div class="inputs">
                        <label for="password">Password</label>
                        <input type="password" name="password" class="password"></input>
                    </div>

                    <div class="buttons">
                        <button class="createBtn btn log2" onClick={log}>Log in</button>
                        <button class="cancel btn signbtn" onClick={sign}>Sign up</button>
                    </div>



                    
                </section>
            </main>
   
  )
}
