import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [data, setData] = useState({})
    async function signIn({name, password}){
        try {
            const response = await api.post("/session", {name, password})
            const {name: userName, token} = response.data;

            localStorage.setItem("@concreto:user", JSON.stringify(userName));
            localStorage.setItem("@concreto:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({userName, token})

        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Erro ao logar")
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@concreto:user")
        localStorage.removeItem("@concreto:token")
        setData({})
    }
    useEffect(()=> {
        const token = localStorage.getItem("@concreto:token")
        const user = localStorage.getItem("@concreto:user")

        if(token&&user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({
                token,
                userName: JSON.parse(user)
            })
        }
    }, [])

    return(
        <AuthContext.Provider value={{ signOut, signIn, user: data.userName }}>
            {children}
        </AuthContext.Provider>
    )}

function useAuth() {
    const context = useContext(AuthContext)
    return context;
}

export { AuthProvider, useAuth }