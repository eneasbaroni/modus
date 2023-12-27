import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UserContext = createContext()

const UserProvider = ({children}) => {
  
  const [user, setUser] = useState()
  const [userLoading, setUserLoading] = useState(false)

  const reloadUser = async () => {
    setUserLoading(true)
    const recoveredUser = localStorage.getItem('user')
    const parsedUser = JSON.parse(recoveredUser)
    const user = await axios.get(`https://modus-server-client.onrender.com/client/${parsedUser._id}`)
    login(user.data)
    setUserLoading(false)
  }

  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')
    if (recoveredUser) {
      reloadUser()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    userLoading,
    login,
    logout
  }

  return <UserContext.Provider value={data}> {children} </UserContext.Provider>
}

export {UserContext, UserProvider}