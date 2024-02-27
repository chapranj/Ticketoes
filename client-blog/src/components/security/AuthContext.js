import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [username, setUsername] = useState(null);

    function login(username, password){
        if(username==="pranjal"&password ==="pass"){
            setAuthenticated(true);
            setUsername(username);
            return true;
        }
        else{
            logOut();
            return false;
        }
    }

    function logOut(){
        setAuthenticated(false);
        setUsername(null)
    }


    return (
        <AuthContext.Provider value={{isAuthenticated, username, login, logOut}}>
            {children}
        </AuthContext.Provider>
    )
}