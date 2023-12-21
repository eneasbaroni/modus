import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserProvider = ({children}) => {
  
  const [user, setUser] = useState()

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser))
    }
  }, [])
  

  const login = (user) => {
    setUser(user)  
    //guardar usuario en localStorage
    localStorage.setItem('user', JSON.stringify(user));    
  }

  const logout = () => {
    setUser()
    localStorage.removeItem('user');
  }

  const data = {
    user,
    login,
    logout
  }

  return <UserContext.Provider value={data}> {children} </UserContext.Provider>
}

export {UserContext, UserProvider}