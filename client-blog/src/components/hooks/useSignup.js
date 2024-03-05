import { useState } from "react";
import { useAuth } from "../security/AuthContext";

export const useSignup = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuth();

    const signup = async (email, password)=>{
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:3000/user/signup',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email,password})
        })

        //email and token is received here in JSON format 
        const json = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(json.error)
        }

        if(response.ok){
            //save the user to the local storage
            localStorage.setItem('user', JSON.stringify(json))
            //update the authcontext
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false);
        }
    }

    return {signup, isLoading, error}
}