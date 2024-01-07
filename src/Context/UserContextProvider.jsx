import React from 'react'
import UserContex from './UserContext'
import { useState } from 'react'



function UserContextProvider({children}) {

    const [user , setuser ] = useState()

  return (
    <UserContex.Provider value={{user , setuser}}>
        {children}
    </UserContex.Provider>
  )
}

export default UserContextProvider