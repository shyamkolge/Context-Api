import React, { useContext } from 'react'
import { useState } from 'react'
import UserContex from '../Context/UserContext'

function Login() {

     const [username , setUsername] = useState()
     const [password , setPassword  ] = useState()

    const {setuser} = useContext(UserContex)

     const handleSubmit = () =>{
         setuser({username, password})
     }
 
  return (
    <div className='h-96 sm:w-1/2 bg-slate-500 m-auto mt-20 rounded-md relative'>
        <h1 className='p-6 text-3xl text-black-400 font-semibold'>Login</h1>

      <div className='m-auto mt-8 flex flex-col w-1/2 gap-10 items-center justify-center'> 

        <input 
             value={username}
             onChange={(e) => {setUsername(e.target.value)}}
            type="text" 
            placeholder='UserName'
          className='bg-gray-300 outline-none p-4 h-10 rounded-lg'
        />
        
        <input 
        value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          type="text" 
          placeholder='Password'
          className='bg-gray-300 h-10 outline-none rounded-lg p-4'
        />

        <button onClick={handleSubmit}
           className='bg-green-500 px-10 py-2 rounded-lg absolute bottom-10' 
         >Login</button>
        
    
      </div>
        
    </div>
  )
}

export default Login
