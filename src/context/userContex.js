import { createContext, useEffect, useState } from "react";
import axios from "axios";


const UserContext = createContext()

const UserProvider = ({children}) => {
  
  const [user, setUser] = useState()

  useEffect(() => {
    login()
  }, [])
  

  const login = () => {
    axios ({
      method: 'get',
      withCredentials: true,
      url: 'https://modus-server-sjng.onrender.com/user',
    })
    .then (res => {
      if (res.data) {       
        setUser(res.data)      
      }
    })
  }

  const logout = () => {
    axios ({
      method: 'get',
      withCredentials: true,
      url: 'https://modus-server-sjng.onrender.com/auth/logout',
    })
    .then (res => {
      if (res.status === 200) {
        setUser(null)
      }
    })
  }

  const data = {
    user,
    login,
    logout
  }

  return <UserContext.Provider value={data}> {children} </UserContext.Provider>
}

export {UserContext, UserProvider}