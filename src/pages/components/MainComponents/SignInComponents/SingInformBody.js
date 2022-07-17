import React from 'react'

import { useState , useEffect} from 'react'


export default ({handlechanger,signStudent}) => {

    let [firstName,setFirst]=useState("")

    let [lastName,setLast]=useState("")

    let [email,setEmail]=useState("")

    let [age,setAge]=useState(0)

    let [password,setPassword]=useState("")

    let [role_id, setRole]= useState(0)

    const onChange = (e) =>{

        let obj= e.target;
    
        if(obj.classList.contains("firstName")){
    
            setFirst(obj.value)
        }else  if(obj.classList.contains("lastName")){
    
            setLast(obj.value)
      }else  if(obj.classList.contains("email")){
    
        setEmail(obj.value)
    
      }else  if(obj.classList.contains("age")){
    
        setAge(obj.value)
      }else  if(obj.classList.contains("password")){
    
        setPassword(obj.value)
      }else if(obj.classList.contains("type")){
        
        if(obj.value=="Student"){
          setRole(1)
        }else if(obj.value =="Profesor"){
          setRole(2)
        }

        console.log(role_id)
         
      }
     

    

    }

    useEffect(()=>{
      handlechanger(firstName,lastName,email,age,password,role_id)
  })

  return (
    <section class="formBody">
      
    <div class="inputs" onChange={onChange} >

        <h1>Create a free account</h1>

        <div className='input'>
          <select className='type'>
          <option value="" disabled selected>Chose account type</option>
            <option>Student</option>
            <option>Profesor</option>
          </select>
        </div>
         
         <div class="input">
          
             <input type="text" class="firstName" placeholder="First Name"></input>
         </div>

         <div class="input">
          
             <input type="text" class="lastName" placeholder="Last Name"></input>
         </div>


         <div class="input">
       
             <input type="email" class="email" placeholder="Email"></input>
         </div>

         <div class="input">
       
            <input type="number" class="age" placeholder="Age"></input>
        </div>

        <div class="input">
       
            <input type="text" class="password" placeholder="Password"></input>
        </div>

        <button class="btn" onClick={signStudent}>Sign in</button>
    </div>
 </section>
  )
}
