import React from 'react'

import { useState , useEffect} from 'react'


export default ({handlechanger,signStudent}) => {

    let [firstName,setFirst]=useState("")

    let [lastName,setLast]=useState("")

    let [email,setEmail]=useState("")

    let [age,setAge]=useState(0)

    let [password,setPassword]=useState("")

    let [role_id, setRole]= useState(0)

    const [profile, setProfile]= useState("")

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

        // console.log(role_id)
         
      }else if(obj.classList.contains("profile")){
        setProfile(obj.value)
      }
     

    

    }

    useEffect(()=>{
      handlechanger(firstName,lastName,email,age,password,role_id,profile)
  })

  return (
    <section className="formBody">
      
    <div className="inputs" onChange={onChange} >

        <h1>Create a free account</h1>

        <div className='input'>
          <select className='type' defaultValue="">
          <option value="" disabled>Chose account type</option>
            <option>Student</option>
            <option>Profesor</option>
          </select>
        </div>
         
         <div className="input">
          
             <input type="text" className="firstName" placeholder="First Name"></input>
         </div>

         <div className="input">
          
             <input type="text" className="lastName" placeholder="Last Name"></input>
         </div>


         <div className="input">
       
             <input type="email" className="email" placeholder="Email"></input>
         </div>

         <div className="input">
       
            <input type="number" className="age" placeholder="Age"></input>
        </div>

         <div className="input">
       
            <input type="text" className="profile" placeholder="Profile pic"></input>
        </div>


        <div className="input">
       
            <input type="text" className="password" placeholder="Password"></input>
        </div>

        <button className="btn" onClick={signStudent}>Sign in</button>
    </div>
 </section>
  )
}
