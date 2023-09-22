import { useEffect } from "react";
import clientes from '../data/clientes.js'

const { createContext, useState } = require("react");

const UserContext = createContext()

const UserProvider = ({children}) => {
  const [user, setUser] = useState()
  
  
  //funcion para obtener usuario de la session
  const getUser = async () => {
    const user = sessionStorage.getItem('user')
    if (user) {
      const client = await clientes.find(client => client.username === user)
      setUser(client)  
  }}
  
  useEffect (() => {    
    getUser()
  },[])

  //funcion para loguear usuario
  const login = async (user, password) => {
    const client = await clientes.find(client => client.username === user && client.pass === password)
    if (client) {
      sessionStorage.setItem('user', user)
      setUser(client)
      return true    
    } else {
      return false
    }
  }
  

  const data = {user, getUser, login }
  return <UserContext.Provider value={data}> {children} </UserContext.Provider>
}

export {UserProvider}
export default UserContext