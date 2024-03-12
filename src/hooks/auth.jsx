import { createContext, useContext } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({});

function AuthProvider({children}){
    async function signIn({name, password}){
        try {
            const response = await api.post("/sessions", {name, password})
            const {user, token} = response.data;
            console.log(user, token)
        } catch (error) {
            if(error.response){
                alert(error.response)
            } else {
                alert("Erro ao logar")
            }
        }
    }

    return(
        <AuthContext.Provider value={{ name: "Greg", email: "g@gmail.com"}}>
            {children}
        </AuthContext.Provider>
    )}

function useAuth() {
    const context = useContext(AuthContext)
    return context;
}

export { AuthProvider, useAuth }