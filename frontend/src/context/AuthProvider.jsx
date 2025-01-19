import React, { Children, useContext, useState } from 'react'
import { createContext } from 'react'
export const AuthContext =createContext()

export default function AuthProvider({children}) {
    const initialAuthuser = localStorage.getItem("Users");
    const [authuser,setAuthUser]=useState(
        initialAuthuser? JSON.parse(initialAuthuser) : undefined
    )
  return (
    <AuthContext.Provider value={[authuser,setAuthUser]}>
        {children}
    </AuthContext.Provider>
    
  )
}
export const useAuth=() => useContext(AuthContext)
