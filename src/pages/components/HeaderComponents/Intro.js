import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'

export default () => {

    const [user,setUser]= useContext(Context)

  return (
        <div class="intro">
                 {
                    
                    user?(
                        <>
                        <h1>Welcome {user.lastName}</h1>
                        <h2>Explore our courses</h2>
                       </>
                    )
                    
                 :(
                    <>
                    <h1>Welcome </h1>
                    <h2>Explore our courses</h2>
                    </>
                 )}
                    
        </div>
  )
}
